import {
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import { BUTTON_BASE_CLASSES } from '../Button/buttonShared';
import { STROKE_WIDTHS, type StrokeWidthValue } from '../../icons/strokeWidths';

export type IconButtonSize = 'lg' | 'md' | 'sm' | 'tiny';
export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'inherit';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'aria-label'> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  type?: 'button' | 'submit' | 'reset';
  /** Icon rendered inside the square button. Sized automatically by `size`. */
  icon: ReactNode;
  /** Required: icon-only buttons must expose an accessible name. */
  'aria-label': string;
}

// Square box sizes match Figma exactly (24/32/40/48). `tiny` uses a 6px
// padding — Figma hardcodes this literal too (no token), so we mirror it.
const SIZES: Record<IconButtonSize, string> = {
  lg: cn('size-[48px] p-(--padding-sm)'),
  md: cn('size-[40px] p-(--padding-xs)'),
  sm: cn('size-[32px] p-(--padding-2xs)'),
  tiny: cn('size-[24px] p-[6px]'),
};

const ICON_SIZE: Record<IconButtonSize, number> = {
  lg: 24,
  md: 20,
  sm: 16,
  tiny: 12,
};

const ICON_STROKE_WIDTH: Record<IconButtonSize, StrokeWidthValue> = {
  lg: STROKE_WIDTHS.regular,
  md: STROKE_WIDTHS.regular,
  sm: STROKE_WIDTHS.light,
  tiny: STROKE_WIDTHS.light,
};

// Secondary border thins at sm/tiny per Figma (0.5px vs 1px) so the outline
// doesn't visually dominate the smaller box. Inset shadow keeps box-sizing
// identical to other variants.
const SECONDARY_BORDER: Record<IconButtonSize, string> = {
  lg: '[box-shadow:inset_0_0_0_1px_var(--stroke-color-default)]',
  md: '[box-shadow:inset_0_0_0_1px_var(--stroke-color-default)]',
  sm: '[box-shadow:inset_0_0_0_0.5px_var(--stroke-color-default)]',
  tiny: '[box-shadow:inset_0_0_0_0.5px_var(--stroke-color-default)]',
};

const VARIANT_BG_TEXT: Record<IconButtonVariant, string> = {
  primary: cn('bg-(--color-neutral-solid-950) text-(--color-neutral-solid-50)'),
  secondary: cn('bg-(--color-neutral-solid-50) text-(--color-font-primary)'),
  tertiary: cn('bg-(--color-neutral-alpha-black-4) text-(--color-ocean-500)'),
  // `inherit` has no background and inherits color from its parent so the
  // button can drop into arbitrary contexts (toolbars, list items, etc.).
  inherit: '',
};

export function IconButton({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  icon,
  ...props
}: IconButtonProps) {
  const sizedIcon = isValidElement(icon)
    ? cloneElement(
        icon as ReactElement<{ size?: number | string; strokeWidth?: number }>,
        {
          size: ICON_SIZE[size],
          strokeWidth: ICON_STROKE_WIDTH[size],
        },
      )
    : icon;

  return (
    <button
      type={type}
      className={cn(
        BUTTON_BASE_CLASSES,
        SIZES[size],
        VARIANT_BG_TEXT[variant],
        variant === 'secondary' && SECONDARY_BORDER[size],
        className,
      )}
      {...props}
    >
      {sizedIcon}
    </button>
  );
}
