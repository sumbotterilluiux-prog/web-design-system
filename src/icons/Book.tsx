import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Book',
  category: 'symbol',
  tags: ["book"] as const,
} as const;

export function Book({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-3 -1 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M15 15H4C2.34315 15 1 16.3431 1 18M15 15V21M15 15C16.1046 15 17 14.1046 17 13V3C17 1.89543 16.1046 1 15 1H4C2.34315 1 1 2.34315 1 4V18M17 21H15M15 21H4C2.34315 21 1 19.6569 1 18" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Book.meta = meta;
