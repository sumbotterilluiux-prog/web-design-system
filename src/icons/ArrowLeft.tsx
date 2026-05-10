import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ArrowLeft',
  category: 'arrow',
  tags: ["arrow","left"] as const,
} as const;

export function ArrowLeft({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-4.2071 -5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M14.5858 7H1.58579M6.58579 1L1.29289 6.29289C0.902369 6.68342 0.902369 7.31658 1.29289 7.70711L6.58579 13" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ArrowLeft.meta = meta;
