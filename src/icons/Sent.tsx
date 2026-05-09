import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Sent',
  category: 'symbol',
  tags: ["sent"] as const,
} as const;

export function Sent({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M15.7365 1L6.25643 10.7233C5.89674 11.0922 5.31358 11.0922 4.95389 10.7233L1 6.66798M11.5199 10.7233L21 1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Sent.meta = meta;
