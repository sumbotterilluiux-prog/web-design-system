import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ArrowUp',
  category: 'arrow',
  tags: ["arrow","up"] as const,
} as const;

export function ArrowUp({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 15.5858"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M7 14.5858L7 1.58579M1 6.58579L6.29289 1.29289C6.68342 0.902369 7.31658 0.902369 7.70711 1.29289L13 6.58579" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ArrowUp.meta = meta;
