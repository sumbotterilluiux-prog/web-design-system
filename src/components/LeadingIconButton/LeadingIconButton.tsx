import {
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import {
  BUTTON_BASE_CLASSES,
  BUTTON_VARIANT_CLASSES,
  type ButtonSize,
  type ButtonVariant,
} from '../Button/buttonShared';
import { STROKE_WIDTHS, type StrokeWidthValue } from '../../icons/strokeWidths';

export interface LeadingIconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  /** Icon rendered before the label. Sized automatically by the button's `size`. */
  icon: ReactNode;
}

const SIZES: Record<ButtonSize, string> = {
  sm: cn(
    'h-[32px]',
    'pl-(--padding-xs) pr-(--padding-sm)',
    'gap-(--gap-2xs)',
    'text-(length:--font-size-web-body-sm)',
  ),
  md: cn(
    'h-[40px]',
    'pl-(--padding-sm) pr-(--padding-md)',
    'gap-(--gap-xs)',
    'text-(length:--font-size-web-body-md)',
  ),
  lg: cn(
    'h-[48px]',
    'pl-(--padding-md) pr-(--padding-xl)',
    'gap-(--gap-sm)',
    'text-(length:--font-size-web-body-md)',
  ),
};

const ICON_SIZE: Record<ButtonSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

const ICON_STROKE_WIDTH: Record<ButtonSize, StrokeWidthValue> = {
  sm: STROKE_WIDTHS.light,
  md: STROKE_WIDTHS.regular,
  lg: STROKE_WIDTHS.regular,
};

export function LeadingIconButton({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  icon,
  children,
  ...props
}: LeadingIconButtonProps) {
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
        BUTTON_VARIANT_CLASSES[variant],
        className,
      )}
      {...props}
    >
      {sizedIcon}
      {children}
    </button>
  );
}
