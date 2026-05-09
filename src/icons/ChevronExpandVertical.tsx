import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ChevronExpandVertical',
  category: 'arrow',
  tags: ["chevron","expand","vertical"] as const,
} as const;

export function ChevronExpandVertical({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 19.1716"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M1 6.58579L6.29289 1.29289C6.68342 0.902369 7.31658 0.902369 7.70711 1.29289L13 6.58579M1 12.5858L6.29289 17.8787C6.68342 18.2692 7.31658 18.2692 7.70711 17.8787L13 12.5858" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ChevronExpandVertical.meta = meta;
