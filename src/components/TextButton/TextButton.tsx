import {
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import { STROKE_WIDTHS, type StrokeWidthValue } from '../../icons/strokeWidths';

export type TextButtonSize = 'sm' | 'md' | 'lg';
export type TextButtonIconPosition = 'leading' | 'trailing';

export interface TextButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  size?: TextButtonSize;
  type?: 'button' | 'submit' | 'reset';
  /** Optional icon. Position controlled by `iconPosition`. */
  icon?: ReactNode;
  /** Where the icon sits relative to the label. Ignored when `icon` is omitted. */
  iconPosition?: TextButtonIconPosition;
}
const BASE = cn(
  'inline-flex items-center justify-center',
  'bg-transparent border-0 p-0 rounded-none',
  'cursor-pointer select-none outline-none',
  'focus-visible:[outline:1px_solid_var(--stroke-color-default)]',
  'focus-visible:outline-offset-2',
  'text-(--color-ocean-500)',
  'disabled:cursor-not-allowed',
  'disabled:text-(--color-neutral-alpha-black-24)',
  // Interactive states: shift through the ocean palette to mirror the
  // filled-button family's behavior (hover lightens, active darkens)
  // while keeping TextButton's no-background contract.
  'transition-colors duration-150',
  'motion-reduce:transition-none',
  'enabled:hover:text-(--color-ocean-400)',
  'enabled:active:text-(--color-ocean-600)',
  'font-(family-name:--font-family-body)',
  'font-(--font-weight-button)',
  'leading-(--font-line-height-body)',
  'tracking-(--font-letter-spacing-body)',
  'whitespace-nowrap',
);

const SIZES: Record<TextButtonSize, string> = {
  sm: cn('text-(length:--font-size-web-body-xs) gap-(--gap-2xs)'),
  md: cn('text-(length:--font-size-web-body-sm) gap-(--gap-2xs)'),
  lg: cn('text-(length:--font-size-web-body-md) gap-(--gap-xs)'),
};

const ICON_SIZE: Record<TextButtonSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

const ICON_STROKE_WIDTH: Record<TextButtonSize, StrokeWidthValue> = {
  sm: STROKE_WIDTHS.light,
  md: STROKE_WIDTHS.light,
  lg: STROKE_WIDTHS.regular,
};

export function TextButton({
  size = 'md',
  type = 'button',
  className,
  icon,
  iconPosition = 'leading',
  children,
  ...props
}: TextButtonProps) {
  const sizedIcon =
    icon && isValidElement(icon)
      ? cloneElement(
          icon as ReactElement<{ size?: number | string; strokeWidth?: number }>,
          {
            size: ICON_SIZE[size],
            strokeWidth: ICON_STROKE_WIDTH[size],
          },
        )
      : icon;

  return (
    <button type={type} className={cn(BASE, SIZES[size], className)} {...props}>
      {sizedIcon && iconPosition === 'leading' ? sizedIcon : null}
      {children}
      {sizedIcon && iconPosition === 'trailing' ? sizedIcon : null}
    </button>
  );
}
