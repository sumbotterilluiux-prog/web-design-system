import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Timer',
  category: 'symbol',
  tags: ["timer"] as const,
} as const;

export function Timer({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.5484 -0.5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M10.3628 4C5.3922 4 1.36277 8.02944 1.36277 13C1.36277 17.9706 5.3922 22 10.3628 22C15.3333 22 19.3628 17.9706 19.3628 13C19.3628 8.02944 15.3333 4 10.3628 4ZM10.3628 4V1M16.3628 6L18.3628 4M4.36277 6L2.36277 4M8.36277 1H12.3628M10.3628 9V13M17.3628 2.58342C18.323 3.26108 19.1794 4.07614 19.9032 5M1.00004 5C1.67892 4.13351 2.47436 3.36272 3.36277 2.71125" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Timer.meta = meta;
