import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ArrowRight',
  category: 'arrow',
  tags: ["arrow","right"] as const,
} as const;

export function ArrowRight({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-4.2071 -5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M1 7H14M9 1L14.2929 6.29289C14.6834 6.68342 14.6834 7.31658 14.2929 7.70711L9 13" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

ArrowRight.meta = meta;
