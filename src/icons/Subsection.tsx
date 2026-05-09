import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Subsection',
  category: 'arrow',
  tags: ["subsection"] as const,
} as const;

export function Subsection({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15.5858 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M1 1V2C1 3.65685 2.34315 5 4 5H14M11 1L14.2929 4.29289C14.6834 4.68342 14.6834 5.31658 14.2929 5.70711L11 9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Subsection.meta = meta;
