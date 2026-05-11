import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ChevronLeft',
  category: 'arrow',
  tags: ["chevron","left"] as const,
} as const;

export function ChevronLeft({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-8.2071 -5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M6.58579 1L1.29289 6.29289C0.902369 6.68342 0.902369 7.31658 1.29289 7.70711L6.58579 13" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

ChevronLeft.meta = meta;
