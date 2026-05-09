import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Plus',
  category: 'symbol',
  tags: ["plus"] as const,
} as const;

export function Plus({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M9 1V17M17 9L1 9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Plus.meta = meta;
