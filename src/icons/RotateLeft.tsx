import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'RotateLeft',
  category: 'arrow',
  tags: ["rotate","left"] as const,
} as const;

export function RotateLeft({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19.9289 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M1.85784 18.0711C5.76308 21.9763 12.0947 21.9763 16 18.0711C19.9052 14.1658 19.9052 7.83418 16 3.92893C12.0947 0.0236893 5.76308 0.0236893 1.85784 3.92893M1 1V4.9C1 4.95523 1.04477 5 1.1 5H5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

RotateLeft.meta = meta;
