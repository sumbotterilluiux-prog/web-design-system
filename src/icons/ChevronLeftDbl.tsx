import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ChevronLeftDbl',
  category: 'arrow',
  tags: ["chevron","left","dbl"] as const,
} as const;

export function ChevronLeftDbl({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-5.2071 -5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M6.58579 1L1.29289 6.29289C0.902369 6.68342 0.902369 7.31658 1.29289 7.70711L6.58579 13M12.5858 1L7.29289 6.29289C6.90237 6.68342 6.90237 7.31658 7.29289 7.70711L12.5858 13" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

ChevronLeftDbl.meta = meta;
