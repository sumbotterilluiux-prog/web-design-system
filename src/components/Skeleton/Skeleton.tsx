import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

// The gradient lays a lighter band over the base alpha-black-8 surface;
// background-position animates from +200% to -200% so the band sweeps left,
// producing the classic loading shimmer. `motion-reduce:animate-none` honors
// users with `prefers-reduced-motion: reduce`.
const BASE = cn(
  'block',
  'h-[16px] w-[128px]',
  'rounded-(--stroke-radius-xs)',
  'bg-[linear-gradient(90deg,var(--color-neutral-alpha-black-8)_0%,var(--color-neutral-alpha-black-4)_50%,var(--color-neutral-alpha-black-8)_100%)]',
  'bg-[length:200%_100%]',
  'animate-skeleton-shimmer',
  'motion-reduce:animate-none',
);

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn(BASE, className)} {...props} />;
}
