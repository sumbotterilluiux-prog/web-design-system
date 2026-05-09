import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Minus',
  category: 'symbol',
  tags: ["minus"] as const,
} as const;

export function Minus({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M17 1L1 1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Minus.meta = meta;
