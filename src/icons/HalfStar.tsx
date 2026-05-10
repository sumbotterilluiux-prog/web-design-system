import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'HalfStar',
  category: 'symbol',
  tags: ["half","star"] as const,
} as const;

export function HalfStar({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-6.0556 -2.0761 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M5.31988 18.7871L10.6215 15.9999C10.7858 15.9135 10.8888 15.743 10.8888 15.5573V1.50222C10.8888 0.973198 10.1745 0.806545 9.94041 1.28094L7.7723 5.67402C7.69947 5.82159 7.55868 5.92387 7.39583 5.94754L1.42974 6.81446C1.01963 6.87405 0.855875 7.37804 1.15263 7.66731L5.46973 11.8754C5.58758 11.9903 5.64135 12.1558 5.61353 12.318L4.5944 18.26C4.52435 18.6684 4.95306 18.9799 5.31988 18.7871Z" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

HalfStar.meta = meta;
