#!/usr/bin/env node
/**
 * Extract icons from a persisted Figma MCP get_design_context response.
 *
 * Usage:
 *   node scripts/extract-icons.mjs <path-to-persisted.json> [--category <name>]
 *
 * Reads the JSON, parses each Symbol/* component, downloads its SVG asset,
 * normalizes the SVG (strips Figma export junk, replaces hardcoded stroke
 * values with Tailwind classes via our component template, converts
 * kebab-case attrs to camelCase, adds vectorEffect="non-scaling-stroke"),
 * and writes one .tsx per icon under src/icons/. Rewrites src/icons/index.ts.
 *
 * Idempotent: re-running with the same input overwrites existing files.
 */

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const iconsDir = resolve(repoRoot, 'src/icons');

const args = process.argv.slice(2);
const inputPath = args.find((a) => !a.startsWith('--'));
const categoryFlag = args.indexOf('--category');
const category = categoryFlag >= 0 ? args[categoryFlag + 1] : 'symbol';

if (!inputPath) {
  console.error('Usage: node scripts/extract-icons.mjs <path-to-persisted.json> [--category <name>]');
  process.exit(1);
}

// Overrides keyed by either Figma data-name (e.g. '3d') or by Figma function
// name (e.g. 'SymbolHeart') for cases where the data-name collides between
// distinct icons.
const NAME_OVERRIDES = {
  '3d': 'ThreeD',
  // Figma file has two icons both named "heart"; visually one is a single
  // heart, the other a double heart. Function names disambiguate.
  SymbolHeart: 'DoubleHeart',
  SymbolHeart1: 'Heart',
};

function toPascalName(rawName) {
  if (NAME_OVERRIDES[rawName]) return NAME_OVERRIDES[rawName];
  return rawName
    .split(/[\s/_-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function pascalFromFunctionName(fnName) {
  // Strip the leading PascalCase prefix (Symbol, Arrows, etc.) so the rest
  // becomes a clean component name — e.g. SymbolHeart1 -> Heart1,
  // ArrowsChevronRight -> ChevronRight.
  return fnName.replace(/^[A-Z][a-z]+/, '');
}

function tagsFromName(rawName) {
  return rawName.split(/[\s/_-]+/).filter(Boolean);
}

const KEBAB_TO_CAMEL = {
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-width': 'strokeWidth',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-opacity': 'strokeOpacity',
  'fill-rule': 'fillRule',
  'fill-opacity': 'fillOpacity',
  'clip-rule': 'clipRule',
  'clip-path': 'clipPath',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'vector-effect': 'vectorEffect',
};

function reactifyAttributes(s) {
  let out = s;
  for (const [k, v] of Object.entries(KEBAB_TO_CAMEL)) {
    out = out.replaceAll(`${k}=`, `${v}=`);
  }
  return out;
}

/**
 * Detect whether an icon's vector content is fill-based (closed shapes
 * coloured by `fill="..."`) or stroke-based (outlined by `stroke="..."`).
 * Figma exports some icons as outlined-paths-converted-to-fills, which
 * means stroking them again at the SVG level produces a visibly heavier
 * icon than its stroke-based siblings.
 */
function isFillBased(svgText) {
  const inner = svgText.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!inner) return false;
  return /fill="(?!none")[^"]+"/.test(inner[1]);
}

function transformInner(svgText) {
  const inner = svgText.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!inner) throw new Error('No <svg> root in asset');
  let body = inner[1].trim();

  // Drop hardcoded stroke / stroke-width / non-none fill / id —
  // Tailwind classes on the SVG element drive these via tokens.
  body = body.replaceAll(/\s+stroke="[^"]*"/g, '');
  body = body.replaceAll(/\s+stroke-width="[^"]*"/g, '');
  body = body.replaceAll(/\s+fill="(?!none")[^"]*"/g, '');
  body = body.replaceAll(/\s+id="[^"]*"/g, '');

  body = reactifyAttributes(body);

  // Add vectorEffect="non-scaling-stroke" to any path lacking it.
  body = body.replaceAll(/<path([^/>]*)\/>/g, (m, attrs) => {
    if (/vectorEffect/.test(attrs)) return m;
    return `<path${attrs} vectorEffect="non-scaling-stroke" />`;
  });

  // Indent body two spaces relative to SVG element so the file is tidy.
  return body
    .split('\n')
    .map((l) => (l.trim() ? '      ' + l.trim() : ''))
    .join('\n');
}

function viewBoxFrom(svgText) {
  const m = svgText.match(/viewBox="([^"]+)"/);
  return m ? m[1] : '0 0 24 24';
}

/**
 * Normalize a Figma-cropped viewBox to a 24×24 canvas while preserving
 * each icon's natural Figma proportions (1:1 with the source design).
 *
 * Figma's MCP exports cropped SVG assets — viewBox is the path's bounding
 * box (e.g. ArrowUp at 14×15.6) rather than the parent 24×24 frame.
 * Rendering at width=24 height=24 with the cropped viewBox would auto-
 * scale via preserveAspectRatio, producing inconsistent sizes that don't
 * match Figma.
 *
 * Strategy: keep user-space units 1:1 with viewport pixels (vbDim = 24)
 * and shift minX/minY so the path's bounding box is centered within the
 * 24-square. Each icon renders at exactly its Figma-designed size — a
 * chevron stays compact, a circle fills more of the canvas — matching
 * the source 1:1.
 */
function normalizeViewBoxTo24(viewBox) {
  const parts = viewBox.trim().split(/\s+/).map(Number);
  if (parts.length !== 4 || parts.some(Number.isNaN)) return '0 0 24 24';
  const [minX, minY, w, h] = parts;
  const TARGET = 24;
  const newMinX = minX - (TARGET - w) / 2;
  const newMinY = minY - (TARGET - h) / 2;
  const fmt = (n) => Number(n.toFixed(4)).toString();
  return `${fmt(newMinX)} ${fmt(newMinY)} ${TARGET} ${TARGET}`;
}

function componentFile({ componentName, rawName, viewBox, body, fillBased }) {
  const tags = tagsFromName(rawName);
  // Stroke-based icons inherit color via `stroke`; fill-based ones (where Figma
  // expanded strokes to filled shapes on export) inherit via `fill`. Applying
  // stroke-width to a fill-based icon would draw an extra outline around the
  // already-filled shape, making it look heavier than stroke-only siblings.
  const tokenClasses = fillBased
    ? "'fill-[var(--stroke-color-default)]'"
    : "'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]'";
  return `import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: '${componentName}',
  category: '${category}',
  tags: ${JSON.stringify(tags)} as const,
} as const;

export function ${componentName}({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        ${tokenClasses},
        className,
      )}
      {...props}
    >
${body}
    </svg>
  );
}

${componentName}.meta = meta;
`;
}

async function main() {
  const raw = await readFile(inputPath, 'utf8');
  // Input can be either a persisted MCP JSON wrapper or raw text
  // (e.g. when a fresh inline response is dumped to a file).
  let text;
  if (raw.trimStart().startsWith('[')) {
    text = JSON.parse(raw)[0].text;
  } else {
    text = raw;
  }

  // imgIconN = "url" mapping
  const urlMap = new Map();
  for (const m of text.matchAll(/^const (imgIcon\d*)\s*=\s*"([^"]+)";?$/gm)) {
    urlMap.set(m[1], m[2]);
  }

  // Pair each component with its primary imgIcon reference.
  // Track function names so we can disambiguate icons whose data-name collides.
  // Prefix-agnostic: matches Symbol/foo, Arrows/foo, etc.
  const icons = [];
  const compRe = /function (\w+)\([\s\S]*?data-name="\w+\/([^"]+)"[\s\S]*?src=\{(imgIcon\d*)\}/g;
  for (const m of text.matchAll(compRe)) {
    const fnName = m[1];
    const rawName = m[2];
    const imgVar = m[3];
    const url = urlMap.get(imgVar);
    if (!url) {
      console.warn(`No URL for ${rawName} (${imgVar}), skipping`);
      continue;
    }
    icons.push({ fnName, rawName, url });
  }

  // Detect data-name collisions and resolve via overrides or function-name fallback.
  const dataNameCounts = new Map();
  for (const i of icons) dataNameCounts.set(i.rawName, (dataNameCounts.get(i.rawName) || 0) + 1);

  const resolved = [];
  const seen = new Set();
  for (const i of icons) {
    let componentName;
    if (NAME_OVERRIDES[i.fnName]) {
      componentName = NAME_OVERRIDES[i.fnName];
    } else if (NAME_OVERRIDES[i.rawName]) {
      componentName = NAME_OVERRIDES[i.rawName];
    } else if (dataNameCounts.get(i.rawName) > 1) {
      // Data-name collides — fall back to function-name to keep both icons distinct.
      componentName = pascalFromFunctionName(i.fnName);
      console.warn(`  ! "${i.rawName}" collides; using function-name fallback "${componentName}" for ${i.fnName}`);
    } else {
      componentName = toPascalName(i.rawName);
    }
    if (seen.has(componentName)) continue;
    seen.add(componentName);
    resolved.push({ ...i, componentName });
  }

  console.log(`Parsed ${icons.length} icon refs (${resolved.length} unique after dedupe).`);

  // Download all SVGs in parallel
  const downloaded = await Promise.all(
    resolved.map(async (icon) => {
      const res = await fetch(icon.url);
      if (!res.ok) throw new Error(`Fetch failed for ${icon.rawName}: ${res.status}`);
      const svg = await res.text();
      return { ...icon, svg };
    })
  );

  // Generate .tsx files
  const written = [];
  for (const icon of downloaded) {
    const viewBox = normalizeViewBoxTo24(viewBoxFrom(icon.svg));
    const fillBased = isFillBased(icon.svg);
    const body = transformInner(icon.svg);
    const tsx = componentFile({
      componentName: icon.componentName,
      rawName: icon.rawName,
      viewBox,
      body,
      fillBased,
    });
    const outPath = resolve(iconsDir, `${icon.componentName}.tsx`);
    await writeFile(outPath, tsx, 'utf8');
    written.push(icon.componentName);
    console.log(`  ✓ ${icon.componentName}`);
  }

  // Regenerate index.ts barrel from all .tsx files in the dir
  const allFiles = await readdir(iconsDir);
  const allComponentNames = allFiles
    .filter((f) => f.endsWith('.tsx') && !f.endsWith('.stories.tsx') && !f.endsWith('.test.tsx'))
    .map((f) => f.replace(/\.tsx$/, ''))
    .sort();
  const indexContent =
    `export type { IconCategory, IconMeta, IconProps } from './types';\n` +
    allComponentNames.map((n) => `export { ${n} } from './${n}';`).join('\n') +
    '\n';
  await writeFile(resolve(iconsDir, 'index.ts'), indexContent, 'utf8');

  console.log(`\nWrote ${written.length} icon files. Barrel now exports ${allComponentNames.length} icons.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
