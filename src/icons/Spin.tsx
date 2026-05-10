import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Spin',
  category: 'arrow',
  tags: ["spin"] as const,
} as const;

export function Spin({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 -3 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M11 14C10.9998 14 11.0002 14 11 14ZM11 14C5.47748 13.9998 1 11.7613 1 9C1 6.76118 3.94289 4.86603 8 4.2289M11 14C11 14.0003 10.9992 14.0008 10.999 14.001L8 17M11 14C11 13.9997 10.9992 13.9992 10.999 13.999L8 11M17 13.0004C19.4289 12.0882 21 10.6358 21 9C21 6.76118 18.0571 4.86603 14 4.2289M11 1V1.01M11 4V4.01M11 7V7.01" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Spin.meta = meta;
