import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'BookmarkPlus',
  category: 'symbol',
  tags: ["bookmark","plus"] as const,
} as const;

export function BookmarkPlus({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 21.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M9 6V9M9 9V12M9 9H12M9 9H6M3 1H15C16.1046 1 17 1.89543 17 3V14C17 14.6295 16.7036 15.2223 16.2 15.6L10.2 20.1C9.48889 20.6333 8.51111 20.6333 7.8 20.1L1.8 15.6C1.29639 15.2223 1 14.6295 1 14V3C1 1.89543 1.89543 1 3 1Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

BookmarkPlus.meta = meta;
