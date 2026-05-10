import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Close',
  category: 'symbol',
  tags: ["close"] as const,
} as const;

export function Close({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-5 -5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M13 1L1 13M13 13L1 1.00001" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Close.meta = meta;
