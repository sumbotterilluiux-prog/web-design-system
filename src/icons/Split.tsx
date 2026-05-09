import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Split',
  category: 'arrow',
  tags: ["split"] as const,
} as const;

export function Split({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18.5858 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M15 7L17.2929 4.70711C17.6834 4.31658 17.6834 3.68342 17.2929 3.29289L15 1M15 17L17.2929 14.7071C17.6834 14.3166 17.6834 13.6834 17.2929 13.2929L15 11M17 4H13C10.7909 4 9 5.79086 9 8V9M9 9H1M9 9V10C9 12.2091 10.7909 14 13 14H17" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Split.meta = meta;
