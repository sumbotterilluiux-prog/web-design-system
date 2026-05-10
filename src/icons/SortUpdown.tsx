import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'SortUpdown',
  category: 'arrow',
  tags: ["sort","updown"] as const,
} as const;

export function SortUpdown({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-4 -2.4142 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M12 1.58579L12 16.5858M4 17.5858L4 2.58579M9 15.5858L11.2929 17.8787C11.6834 18.2692 12.3166 18.2692 12.7071 17.8787L15 15.5858M1 3.58579L3.29289 1.29289C3.68342 0.902369 4.31658 0.902369 4.70711 1.29289L7 3.58579" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

SortUpdown.meta = meta;
