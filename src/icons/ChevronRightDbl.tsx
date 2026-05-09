import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ChevronRightDbl',
  category: 'arrow',
  tags: ["chevron","right","dbl"] as const,
} as const;

export function ChevronRightDbl({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13.5858 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M7 1L12.2929 6.29289C12.6834 6.68342 12.6834 7.31658 12.2929 7.70711L7 13M1 1L6.29289 6.29289C6.68342 6.68342 6.68342 7.31658 6.29289 7.70711L1 13" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ChevronRightDbl.meta = meta;
