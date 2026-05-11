import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Sandclock',
  category: 'symbol',
  tags: ["sandclock"] as const,
} as const;

export function Sandclock({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-4 -1 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M1 1H15M1 21H15M2 1V5C2 8.31371 4.68629 11 8 11M14 21V17C14 13.6863 11.3137 11 8 11M8 11C4.68629 11 2 13.6863 2 17V21M8 11C11.3137 11 14 8.31371 14 5V1M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5M5 18H11" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

Sandclock.meta = meta;
