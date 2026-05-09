import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Repeat',
  category: 'arrow',
  tags: ["repeat"] as const,
} as const;

export function Repeat({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M15 4H5C2.79086 4 1 5.79086 1 8V9M3 17H13C15.2091 17 17 15.2091 17 13V12M14 7L16.2929 4.70711C16.6834 4.31658 16.6834 3.68342 16.2929 3.29289L14 1M4 14L1.70711 16.2929C1.31658 16.6834 1.31658 17.3166 1.70711 17.7071L4 20" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Repeat.meta = meta;
