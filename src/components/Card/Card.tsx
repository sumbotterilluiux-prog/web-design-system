import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export type CardVariant = 'elevated' | 'outlined';
/** Currently only elevation 1 exists in Figma. Add '2', '3', etc. here
 * AND in ELEVATION_CLASSES below as the design system defines them. */
export type CardElevation = '1';
export type CardPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type CardRadius = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** `elevated` = drop shadow. `outlined` = 1px tertiary stroke; use when
   * a card sits inside another card so the nested level reads as a
   * boundary instead of a second floating surface. */
  variant?: CardVariant;
  /** Drop-shadow level. Ignored when `variant === 'outlined'`. */
  elevation?: CardElevation;
  /** Inner padding. Maps to `--padding-*` tokens; `none` removes padding. */
  padding?: CardPadding;
  /** Corner radius. Maps to `--stroke-radius-*` tokens. */
  radius?: CardRadius;
}

const PADDING_CLASSES: Record<CardPadding, string> = {
  none: 'p-0',
  xs: 'p-(--padding-xs)',
  sm: 'p-(--padding-sm)',
  md: 'p-(--padding-md)',
  lg: 'p-(--padding-lg)',
  xl: 'p-(--padding-xl)',
  '2xl': 'p-(--padding-2xl)',
};

const RADIUS_CLASSES: Record<CardRadius, string> = {
  sm: 'rounded-(--stroke-radius-sm)',
  md: 'rounded-(--stroke-radius-md)',
  lg: 'rounded-(--stroke-radius-lg)',
  xl: 'rounded-(--stroke-radius-xl)',
  '2xl': 'rounded-(--stroke-radius-2xl)',
};

const ELEVATION_CLASSES: Record<CardElevation, string> = {
  '1': '[box-shadow:var(--shadow-elevation-1)]',
};

// Outlined uses an inset box-shadow instead of a CSS `border` so the card's
// outer dimensions don't shift by 2px between elevated and outlined variants.
const OUTLINED_STROKE =
  '[box-shadow:inset_0_0_0_1px_var(--stroke-color-tertiary)]';

const BASE = 'bg-(--color-neutral-solid-50)';

export function Card({
  variant = 'elevated',
  elevation = '1',
  padding = 'md',
  radius = 'lg',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        BASE,
        PADDING_CLASSES[padding],
        RADIUS_CLASSES[radius],
        variant === 'elevated' ? ELEVATION_CLASSES[elevation] : OUTLINED_STROKE,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
