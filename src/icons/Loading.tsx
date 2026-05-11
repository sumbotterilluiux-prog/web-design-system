import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Loading',
  category: 'symbol',
  tags: ["loading"] as const,
} as const;

export function Loading({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 -1 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M10.9999 1V5.44444M18.071 3.92893L14.9283 7.07163M21 11.0002H16.5555M18.071 18.071L14.9283 14.9283M10.9999 16.5556V21M7.07154 14.9284L3.92883 18.0711M5.44446 11.0002H1M6.99997 7L3.92895 3.92898" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

Loading.meta = meta;
