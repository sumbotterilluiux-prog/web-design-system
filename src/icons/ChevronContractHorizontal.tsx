import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ChevronContractHorizontal',
  category: 'arrow',
  tags: ["chevron","contract","horizontal"] as const,
} as const;

export function ChevronContractHorizontal({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M19 1L13.7071 6.29289C13.3166 6.68342 13.3166 7.31658 13.7071 7.70711L19 13M1 13L6.29289 7.70711C6.68342 7.31658 6.68342 6.68342 6.29289 6.29289L1 1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ChevronContractHorizontal.meta = meta;
