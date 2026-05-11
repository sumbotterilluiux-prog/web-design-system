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
 * and disabled state.
 *
 * Variant outlines (e.g. secondary's 1px border) use inset `box-shadow`
 * rather than CSS `border` so that box-sizing math doesn't make
 * outlined variants 2px larger than fill-only variants. Result: every
 * variant occupies identical pixels at the same content size.
 *
 * Each component owns its own size scale (padding, font size, gap, icon
 * size) since those differ per component contract.
 */
export const BUTTON_BASE_CLASSES: string = cn(
  'inline-flex items-center justify-center leading-none',
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
