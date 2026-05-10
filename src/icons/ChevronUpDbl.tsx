import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ChevronUpDbl',
  category: 'arrow',
  tags: ["chevron","up","dbl"] as const,
} as const;

export function ChevronUpDbl({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-5 -5.2071 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M1 6.58579L6.29289 1.29289C6.68342 0.902369 7.31658 0.902369 7.70711 1.29289L13 6.58579M1 12.5858L6.29289 7.29289C6.68342 6.90237 7.31658 6.90237 7.70711 7.29289L13 12.5858" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ChevronUpDbl.meta = meta;
