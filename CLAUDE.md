# CLAUDE.md — web-design-system

Rules for the AI coding agent working in this repo. The repo is a foundational React component library, themed via CSS-variable design tokens, intended to be copied into side projects with brand overrides on top. See [`docs/PLAN.md`](./docs/PLAN.md) for scope and the v1 component list.

---

## 1. Stack

- **Framework:** React 19 (`react`, `react-dom`)
- **Language:** TypeScript with strict-leaning config (`tsconfig.app.json`: `verbatimModuleSyntax`, `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`, `jsx: "react-jsx"`). Bundler module resolution.
- **Build/dev:** Vite 8
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`. Imported globally from `src/index.css`:
  ```css
  @import "tailwindcss";
  @import "./tokens/index.css";
  ```
- **Catalog/docs:** Storybook 10 (`@storybook/react-vite`) with `addon-a11y`, `addon-docs`, `addon-vitest`, Chromatic
- **Tests:** Vitest 4 in **browser mode** via `@vitest/browser-playwright` (Chromium headless), wired through `@storybook/addon-vitest/vitest-plugin` so stories double as tests. See `vite.config.ts`.
- **Class-name helper:** `src/lib/cn.ts` — `clsx` + `tailwind-merge`. **Use this in every component** for `className` composition; never concatenate manually.
- **Lint:** ESLint flat config (`eslint.config.js`) with `js/recommended`, `typescript-eslint/recommended`, `react-hooks`, `react-refresh/vite`, `storybook/flat/recommended`. `dist` is globally ignored.

## 2. Project structure

```
src/
  components/       # one folder per component: Button/, Card/, ...
    <Name>/
      <Name>.tsx           # the component
      <Name>.stories.tsx   # Storybook entry (also runs as a test)
      <Name>.test.tsx      # explicit Vitest tests
      index.ts             # re-export
  tokens/           # CSS variables — overridable per project
    colors.css
    spacing.css
    typography.css
    index.css       # @imports the others
  lib/
    cn.ts           # className helper
  index.css         # global: imports tailwind + tokens
  App.tsx           # playground only — not part of the library surface
  main.tsx          # playground entry
.storybook/
  main.ts
  preview.ts
docs/
  PLAN.md           # source of truth for scope, conventions, v1 list
public/
  favicon.svg
```

- **IMPORTANT:** New components go in `src/components/<Name>/` with all four files (`<Name>.tsx`, `<Name>.stories.tsx`, `<Name>.test.tsx`, `index.ts`). Don't deviate from this layout.
- `src/App.tsx` and `src/main.tsx` exist only for the local Vite playground. Don't put library code there.

## 3. Naming

- Components: `PascalCase` (folder + file: `Button/Button.tsx`)
- Stories: `<Component>.stories.tsx`
- Tests: `<Component>.test.tsx`
- Tokens: kebab-case CSS variables — pattern `--<category>-<role>-<modifier>` (e.g. `--color-primary`, `--color-primary-hover`, `--space-md`, `--radius-sm`)
- Utilities: `camelCase.ts`

## 4. Styling rules (read before writing any component)

- **IMPORTANT:** Components must NEVER hardcode colors, spacing, font sizes, or radii. Use the CSS variables defined in `src/tokens/`. The whole re-theming model depends on this.
  - Reference tokens via Tailwind arbitrary values (`bg-[var(--color-primary)]`, `p-[var(--space-md)]`) or via plain CSS where Tailwind is awkward.
  - If the token you need doesn't exist yet, add it to the appropriate `src/tokens/*.css` file and reference it — don't inline a hex/px.
- **IMPORTANT:** Compose every `className` through `cn()` from `src/lib/cn.ts`. This lets consumers override classes via a `className` prop without specificity wars (`tailwind-merge` handles conflicts).
- All public components must accept and forward a `className` prop.
- Variant + size props use union string types (e.g. `variant: 'primary' | 'secondary' | 'ghost'`). No booleans like `isPrimary`.
- No CSS Modules, no styled-components, no inline `style={{}}`. Tailwind utilities + token-backed CSS variables only.

## 5. Token rules

- Token files (`src/tokens/colors.css`, `spacing.css`, `typography.css`) define `:root { --... }` declarations. They are deliberately overridable — a side project consuming this library replaces these files (or layers `:root` overrides) to re-theme.
- **IMPORTANT:** Token values are sourced from the **Tokens Figma file** (file key `m6o0nlULKxBBGJh5JbTr8b`). Don't invent token values; pull them from Figma via the MCP and write them into the CSS files verbatim.
- Token names use the `--<category>-<role>-<modifier>` pattern. Match the Figma variable name where possible — strip the leading group, kebab-case, prefix by category (`color/brand/primary` → `--color-brand-primary`).

## 6. Components — what's required

For every new component, ship all of:

1. **Component file** (`<Name>.tsx`): typed props (no `any`), forwards `className`, uses `cn()`, references tokens via CSS variables.
2. **Story** (`<Name>.stories.tsx`): one story per visual variant + size + state (default, hover/focus/disabled/loading where applicable). Stories run as tests via the vitest addon, so they're not free decoration.
3. **Tests** (`<Name>.test.tsx`): use `@testing-library/react` and `@testing-library/user-event`. Cover (a) the default render, (b) variant prop wiring, (c) interactive behavior if any (click handler fires, disabled blocks, etc.). Don't snapshot.
4. **Re-export** (`index.ts`): `export * from './<Name>'`. New components must also be considered for a top-level barrel — but there is no top-level barrel yet; don't invent one.
5. **Accessibility:** the Storybook `a11y` addon runs against every story (currently in `'todo'` mode in `.storybook/preview.ts`). Components shipping with violations must be fixed, not muted.

## 7. Figma MCP integration

This repo is wired to **three** Figma files. Use the right one for the right job — they aren't interchangeable.

| Domain | File name | File key | Use for |
|---|---|---|---|
| Tokens | `Tokens` | `m6o0nlULKxBBGJh5JbTr8b` | colors / spacing / typography variables → `src/tokens/*.css` |
| Icons | `Icon-Library` | `vXJwIirRZ9Nwc1R7oekovd` | SVG icon source → `src/icons/*` (when introduced) |
| Components | `Web-Components` | `oS2li8CUMw5mwYAX7FRldi` | component designs → `src/components/<Name>/<Name>.tsx` |

### 7.1 Required Figma flow (do not skip)

For any "implement this from Figma" task:

1. `get_design_context` for the exact node — primary tool, returns reference React+Tailwind code, screenshot, and Code Connect hits.
2. If response is too large or truncated, run `get_metadata` for a structural overview and then re-fetch only the specific child node(s) with `get_design_context`.
3. `get_screenshot` if you need a visual reference separate from the design-context bundle (often you don't — the bundle includes one).
4. `get_variable_defs` against the same node when you need the bound token values.
5. Translate the output into **this project's** stack: Tailwind utilities, `cn()`, CSS-variable tokens, `<Name>.tsx + .stories.tsx + .test.tsx + index.ts` layout.
6. Validate against the Figma screenshot for 1:1 visual parity before declaring done. If the dev server can't render it (e.g. SSR-only, no UI feedback loop available), say so — don't claim parity unverified.

### 7.2 Implementation rules

- **IMPORTANT:** Treat the Figma MCP output (React + Tailwind) as a *reference*, not as final code. Replace anything that conflicts with this repo's conventions: hardcoded hex → token, ad-hoc class strings → `cn()`, absolute positioning → flex/grid, inline `style` → utilities.
- Reuse existing components from `src/components/` instead of inlining duplicate markup. If Figma shows a Button, import the `Button` component (once it exists) rather than rebuilding it.
- Map Figma variable names to the `--<category>-<role>-<modifier>` token convention (Section 5).
- Code Connect: when the response includes a Code Connect mapping for a Figma component, use the mapped import directly — that's the whole point. Do not regenerate markup the mapping already covers.
- **IMPORTANT:** Don't roam the Figma file by guessing node IDs from metadata. If a tool call needs a more specific node, ask the user for a `Copy link`-d URL or a live selection in Figma desktop.

### 7.3 Asset rules

- **IMPORTANT:** When the Figma MCP returns a localhost or short-lived asset URL for an SVG/image, use that source directly — fetch and write it into the repo. Do not substitute placeholders.
- **IMPORTANT:** Don't install new icon packages (`lucide-react`, `react-icons`, etc.). The Icon-Library Figma file is the single source for iconography. Icons land in `src/icons/` as SVG-backed React components when that pipeline is introduced.
- Static assets that ship with the library (not user-supplied) live in `public/`. Today only `favicon.svg`.

## 8. Testing & quality gates

- `npm test` → Vitest in browser mode. Stories run as tests automatically.
- `npm run lint` → ESLint flat config across `**/*.{ts,tsx}`.
- `npm run build` → `tsc -b && vite build`. Type errors fail the build.
- `npm run storybook` → live catalog at `localhost:6006`.
- Don't disable a11y violations or skip tests to make a build pass. Fix the underlying issue.

## 9. What NOT to do

- Don't introduce a new styling system (CSS Modules, styled-components, vanilla-extract, etc.). Tailwind v4 + CSS-variable tokens is the chosen approach.
- Don't add dependency-heavy "kitchen sink" libraries (component kits, icon packs, animation frameworks) without explicit user request — this is a foundation library.
- Don't create top-level barrels, `src/index.ts` exports, or publish config until the v1 component list is complete.
- Don't create new docs files (`.md`) unless the user asks. `docs/PLAN.md` is the canonical plan; this `CLAUDE.md` is the canonical agent rules.
- Don't commit unless explicitly asked.
