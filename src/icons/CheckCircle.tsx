import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'CheckCircle',
  category: 'symbol',
  tags: ["check","circle"] as const,
} as const;

export function CheckCircle({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M15 9L9.83634 13.6942C9.64563 13.8676 9.35437 13.8676 9.16366 13.6942L7 11.7273M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

CheckCircle.meta = meta;
