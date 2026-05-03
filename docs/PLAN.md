# PLAN.md — Web Component Design System

> **Status:** Living document. Update sections as decisions evolve; log changes under "Decisions log" at the bottom.

## Purpose
Build a foundational, themable **web** component library that can be copied into side/client projects with custom branding applied per project, and handed off cleanly to engineers.

## Scope
- **This repo:** web only (browser React components).
- **Out of scope:** mobile — a separate `mobile-design-system` repo for React Native is planned (Section 10).
- **Out of scope (for now):** heavy components like data tables, date pickers. Start small, expand once primitives are solid.

## 1. Tech stack
| Layer | Choice | Why |
|---|---|---|
| Framework | React | Most likely to match a client's stack at handoff |
| Language | TypeScript (strict) | Catches mistakes before runtime |
| Build tool | Vite | Fast dev server, minimal config |
| Styling | Tailwind CSS | Theming via one config file; portable classes |
| Docs/preview | Storybook | Visual catalog + handoff aid |
| Testing | Vitest + React Testing Library | Pairs with Vite |
| Linting | ESLint + Prettier | Format + catch sloppy patterns |
| Version control | Git + GitHub | Industry standard |

## 2. Folder structure
```
web-design-system/
  src/
    components/
      Button/
        Button.tsx           ← the component
        Button.stories.tsx   ← Storybook entry
        Button.test.tsx      ← tests
        index.ts             ← re-export
      Card/
      Input/
      ...
    tokens/
      colors.css             ← brand-overridable
      spacing.css
      typography.css
      index.css              ← imports all tokens
    lib/
      cn.ts                  ← className helper
  .storybook/
    main.ts
    preview.ts
  docs/
    README.md
    THEMING.md
    HANDOFF.md
  package.json
  tsconfig.json
  tailwind.config.ts
```

## 3. Naming conventions
- Components: `PascalCase` (e.g., `Button.tsx` inside `Button/`)
- Stories: `Component.stories.tsx`
- Tests: `Component.test.tsx`
- Tokens: kebab-case CSS variables (`--color-primary`, `--space-md`)
- Utilities: `camelCase.ts`

Different conventions per category are intentional — each tool/language expects its own format. Within each category, stay strictly consistent.

## 4. Token strategy
Components NEVER hardcode colors, spacing, or fonts. They reference CSS variables defined in `src/tokens/`.

**Default tokens example:**
```css
:root {
  --color-primary: #2563eb;
  --color-bg: #ffffff;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --font-body: system-ui, sans-serif;
  --radius-md: 6px;
}
```

**Naming pattern:** `--<category>-<role>-<modifier>`
- `--color-primary`, `--color-primary-hover`, `--color-text-muted`
- `--space-sm` / `--space-md` / `--space-lg`
- `--radius-sm` / `--radius-md`

To re-theme a side project: override `tokens/colors.css` (and others as needed) with the brand. Components don't change.

## 5. v1 components
Enough to build a typical landing/marketing page:
- **Button** — variants: primary/secondary/ghost; sizes: sm/md/lg; states: default/hover/disabled/loading
- **Input** — text, email, password
- **Label**
- **Card**
- **Heading** — h1 through h4
- **Text** — body, caption
- **Stack** — vertical layout container
- **Row** — horizontal layout container
- **Container** — max-width wrapper

v2 (later): Modal, Tabs, Tooltip, Form, Select, Checkbox, Radio, Toast.

## 6. Theming flow (master → side project)
1. Master repo ships components + default tokens.
2. New side project: copy `src/components/` and `src/tokens/` from master.
3. In side project, override tokens with brand colors/fonts.
4. Components automatically re-theme — no component code changes.
5. Storybook in master is for building/documenting. Side projects usually don't need Storybook.

## 7. Quality gates
- TypeScript strict mode
- ESLint + Prettier (auto-format on save)
- Pre-commit hook runs lint + type-check
- Accessibility: each component checked via `wcag-accessibility-audit` skill
- Tests: 1–3 tests per component via `react-testing-library` skill
- Storybook: every component has at least 1 story per variant

## 8. Git/release strategy
- `main` = stable; only merge ready code
- `feature/<name>` branches for new components
- Tag releases with semver (`v0.1.0`, `v0.2.0`, …)
- v0.x = pre-stable; breaking changes allowed

## 9. Documentation deliverables
- **README.md** — install, run Storybook, where to start
- **THEMING.md** — how to override tokens for a new brand
- **HANDOFF.md** — what an engineer needs to take over
- **Storybook autodocs** — auto-generated component reference

## 10. Mobile (out of scope, future)
A separate `mobile-design-system` repo will mirror this for React Native + NativeWind. The two will share **token names** (`--color-primary`, `--space-md`) so designers and engineers see parity between web and mobile.

---

## Skills mapped to plan
- `storybook-configuration` → §2 (.storybook setup)
- `storybook-story-writing` → §5 (story authoring)
- `wcag-accessibility-audit` → §7 (a11y gate)
- `react-testing-library` → §7 (tests)
- `typescript` → §7 (strict typing)
- `tailwind-design-system`, `design-system-patterns` → §§4, 5 (tokens + components)
- `frontend-design`, `web-design-guidelines` → §7 (review gate)
- `figma-use`, `figma-create-design-system-rules`, `figma-generate-design`, `design-handoff` → §9 (Figma ↔ code, handoff)
- `apply-design-system`, `audit-design-system`, `fix-design-system-finding` → §6 (per-project theming)
- `skill-creator` → for custom skills as you grow

---

## Decisions log
- 2026-05-02 — Initial plan drafted. Web-only scope; mobile gets a separate repo (Section 10).
