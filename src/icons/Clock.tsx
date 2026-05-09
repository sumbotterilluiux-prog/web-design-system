import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Clock',
  category: 'symbol',
  tags: ["clock"] as const,
} as const;

export function Clock({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M14 13L12.626 12.084C12.5438 12.0292 12.4451 12.0068 12.3509 11.9774C12.1476 11.9139 12 11.7242 12 11.5V8M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Clock.meta = meta;
