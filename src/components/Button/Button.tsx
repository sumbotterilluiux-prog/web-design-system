import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import {
  BUTTON_BASE_CLASSES,
  BUTTON_VARIANT_CLASSES,
  type ButtonSize,
  type ButtonVariant,
} from './buttonShared';

export type { ButtonSize, ButtonVariant } from './buttonShared';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
}

const SIZES: Record<ButtonSize, string> = {
  sm: cn(
    'h-[32px]',
    'px-(--padding-sm)',
    'text-(length:--font-size-web-body-sm)',
  ),
  md: cn(
    'h-[40px]',
    'px-(--padding-md)',
    'text-(length:--font-size-web-body-md)',
  ),
  lg: cn(
    'h-[48px]',
    'px-(--padding-xl)',
    'text-(length:--font-size-web-body-md)',
  ),
};

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) {
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
      {children}
    </button>
  );
}
