import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Check',
  category: 'symbol',
  tags: ["check"] as const,
} as const;

export function Check({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-3 -5.6036 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M17 1L6.35355 11.6464C6.15829 11.8417 5.84171 11.8417 5.64645 11.6464L1 7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Check.meta = meta;
