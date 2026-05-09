import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'RotateRight',
  category: 'arrow',
  tags: ["rotate","right"] as const,
} as const;

export function RotateRight({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M18.0711 18.0711C14.1658 21.9763 7.83418 21.9763 3.92893 18.0711C0.0236895 14.1658 0.023689 7.83418 3.92893 3.92893C7.83418 0.0236892 14.1658 0.0236892 18.0711 3.92893M19 1V4.9C19 4.95523 18.9552 5 18.9 5H15" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

RotateRight.meta = meta;
