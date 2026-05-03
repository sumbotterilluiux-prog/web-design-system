# web-design-system

Foundational web component library based on Figma designs. Themable via CSS variable tokens; intended to be copied into side projects with per-project branding overrides applied on top.

See [`docs/PLAN.md`](./docs/PLAN.md) for the full plan: tech choices, folder layout, naming conventions, token strategy, v1 component list, theming flow, and quality gates.

## Stack
- React 19 + TypeScript (strict)
- Vite — dev server and build
- Tailwind CSS v4 — styling
- Storybook — component catalog and visual docs
- Vitest + React Testing Library — tests

## Develop

```bash
npm install              # install dependencies
npm run dev              # start the Vite dev server
npm run storybook        # start Storybook
npm test                 # run Vitest tests
npm run build            # production build
```

## Structure
```
src/
  components/   # one folder per component (Button/, Card/, ...)
  tokens/       # CSS variables — colors, spacing, typography
  lib/          # shared utilities (cn helper, etc.)
.storybook/     # Storybook config
docs/           # PLAN.md and other written docs
```

## Linked Figma file
`Web-Components` — file key `oS2li8CUMw5mwYAX7FRldi`. Components are drawn from this file via the local Figma Dev Mode MCP.
