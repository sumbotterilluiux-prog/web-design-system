import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ChevronExpandHorizontal',
  category: 'arrow',
  tags: ["chevron","expand","horizontal"] as const,
} as const;

export function ChevronExpandHorizontal({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2.4142 -5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M12.5858 1L17.8787 6.29289C18.2692 6.68342 18.2692 7.31658 17.8787 7.70711L12.5858 13M6.58579 1L1.29289 6.29289C0.902369 6.68342 0.902369 7.31658 1.29289 7.70711L6.58579 13" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

ChevronExpandHorizontal.meta = meta;
