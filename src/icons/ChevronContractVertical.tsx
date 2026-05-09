import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ChevronContractVertical',
  category: 'arrow',
  tags: ["chevron","contract","vertical"] as const,
} as const;

export function ChevronContractVertical({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M13 1L7.70711 6.29289C7.31658 6.68342 6.68342 6.68342 6.29289 6.29289L1 1M13 19L7.70711 13.7071C7.31658 13.3166 6.68342 13.3166 6.29289 13.7071L1 19" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ChevronContractVertical.meta = meta;
