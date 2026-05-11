import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ChevronExpandVertical',
  category: 'arrow',
  tags: ["chevron","expand","vertical"] as const,
} as const;

export function ChevronExpandVertical({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-5 -2.4142 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M1 6.58579L6.29289 1.29289C6.68342 0.902369 7.31658 0.902369 7.70711 1.29289L13 6.58579M1 12.5858L6.29289 17.8787C6.68342 18.2692 7.31658 18.2692 7.70711 17.8787L13 12.5858" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

ChevronExpandVertical.meta = meta;
