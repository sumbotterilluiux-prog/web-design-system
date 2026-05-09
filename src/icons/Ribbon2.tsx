import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Ribbon2',
  category: 'symbol',
  tags: ["ribbon","2"] as const,
} as const;

export function Ribbon2({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18.5918 18.2959"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M9.2959 13C12.6096 13 15.2959 10.3137 15.2959 7C15.2959 3.68629 12.6096 1 9.2959 1C5.98219 1 3.2959 3.68629 3.2959 7C3.2959 10.3137 5.98219 13 9.2959 13ZM9.2959 13L5.14946 17.1464C4.83447 17.4614 4.2959 17.2383 4.2959 16.7929V16C4.2959 14.8954 3.40047 14 2.2959 14H1.50301C1.05756 14 0.834472 13.4614 1.14945 13.1464L3.7959 10.5M9.2959 13L13.4423 17.1464C13.7573 17.4614 14.2959 17.2383 14.2959 16.7929V16C14.2959 14.8954 15.1913 14 16.2959 14H17.0888C17.5342 14 17.7573 13.4614 17.4423 13.1464L14.7959 10.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Ribbon2.meta = meta;
