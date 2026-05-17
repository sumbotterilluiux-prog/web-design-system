import { cn } from '../../lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Fixed numeric heights per size. CSS-variable height tokens were removed
 * deliberately: button heights are part of the component contract, not a
 * theming surface. Consumers re-theme color / spacing tokens; heights stay
 * stable across themes.
 */
export const BUTTON_HEIGHT_PX: Record<ButtonSize, number> = {
  sm: 32,
  md: 40,
  lg: 48,
};

/**
 * Base styles shared across Button, LeadingIconButton, TrailingIconButton,
 * and IconButton: layout primitives, shape, typography, focus baseline,
 * disabled state, and interactive (hover/pressed) states.
 *
 * Variant outlines (e.g. secondary's 1px border) use inset `box-shadow`
 * rather than CSS `border` so that box-sizing math doesn't make
 * outlined variants 2px larger than fill-only variants. Result: every
 * variant occupies identical pixels at the same content size.
 *
 * Interactive states use a color-agnostic translucent overlay on a
 * `::before` pseudo-element rather than swapping the button's own
 * `background-color`. This keeps the behavior identical across themes:
 * any brand color (current or future) gets the same subtle lightening on
 * hover and subtle darkening on active, without per-variant tuning.
 *
 * Each component owns its own size scale (padding, font size, gap, icon
 * size) since those differ per component contract.
 */
export const BUTTON_BASE_CLASSES: string = cn(
  'inline-flex items-center justify-center leading-none',
  'relative overflow-hidden',
  'rounded-(--stroke-radius-full)',
  'font-(family-name:--font-family-body)',
  'font-(--font-weight-button)',
  'tracking-(--font-letter-spacing-body)',
  'whitespace-nowrap',
  'cursor-pointer select-none outline-none',
  'focus-visible:[outline:1px_solid_var(--stroke-color-default)]',
  'focus-visible:outline-offset-2',
  'disabled:cursor-not-allowed',
  'disabled:bg-(--color-neutral-alpha-black-8)',
  'disabled:text-(--color-neutral-alpha-black-24)',
  'disabled:shadow-none',
  // Interactive overlay: hover lightens, active darkens. `enabled:` gates
  // both so disabled buttons get no overlay. `before:rounded-[inherit]`
  // matches the button's pill so the tint follows the corner radius.
  'before:content-[""] before:absolute before:inset-0',
  'before:rounded-[inherit] before:pointer-events-none',
  'before:transition-colors before:duration-150',
  'motion-reduce:before:transition-none',
  'enabled:hover:before:bg-(--color-neutral-alpha-white-8)',
  'enabled:active:before:bg-(--color-neutral-alpha-black-8)',
);

export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-(--color-neutral-solid-950)',
    'text-(--color-neutral-solid-50)',
  ),
  secondary: cn(
    'bg-(--color-neutral-solid-50)',
    'text-(--color-font-primary)',
    '[box-shadow:inset_0_0_0_1px_var(--stroke-color-default)]',
  ),
  tertiary: cn(
    'bg-(--color-neutral-alpha-black-4)',
    'text-(--color-ocean-500)',
  ),
};
