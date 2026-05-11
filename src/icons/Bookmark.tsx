import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Bookmark',
  category: 'symbol',
  tags: ["bookmark"] as const,
} as const;

export function Bookmark({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-3 -1.25 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M15 1H3C1.89543 1 1 1.89543 1 3V14C1 14.6295 1.29639 15.2223 1.8 15.6L7.8 20.1C8.51111 20.6333 9.48889 20.6333 10.2 20.1L16.2 15.6C16.7036 15.2223 17 14.6295 17 14V3C17 1.89543 16.1046 1 15 1Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

Bookmark.meta = meta;
