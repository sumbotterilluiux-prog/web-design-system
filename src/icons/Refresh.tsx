import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Refresh',
  category: 'arrow',
  tags: ["refresh"] as const,
} as const;

export function Refresh({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 -1 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M18.0711 3.92893C14.1658 0.0236893 7.83418 0.0236893 3.92893 3.92893C1.97631 5.88155 1 8.44078 1 11M3.92893 18.0711C7.83418 21.9763 14.1658 21.9763 18.0711 18.0711C20.0237 16.1184 21 13.5592 21 11M19 1V4.9C19 4.95523 18.9552 5 18.9 5H15M3 21V17.1C3 17.0448 3.04477 17 3.1 17H7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Refresh.meta = meta;
