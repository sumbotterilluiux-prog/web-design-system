import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ArrowDown',
  category: 'arrow',
  tags: ["arrow","down"] as const,
} as const;

export function ArrowDown({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-5 -4.2071 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M7 1L7 14M13 9L7.70711 14.2929C7.31658 14.6834 6.68342 14.6834 6.29289 14.2929L1 9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ArrowDown.meta = meta;
