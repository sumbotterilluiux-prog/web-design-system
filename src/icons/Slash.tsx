import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Slash',
  category: 'symbol',
  tags: ["slash"] as const,
} as const;

export function Slash({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10.0004 18.0004"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M9.00022 1.00022L1.00022 17.0002" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Slash.meta = meta;
