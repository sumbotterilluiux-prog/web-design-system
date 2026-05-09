import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Loading2',
  category: 'symbol',
  tags: ["loading","2"] as const,
} as const;

export function Loading2({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M10.9999 1V5.44444M18.071 3.92893L14.9283 7.07163M21 11.0002H16.5555M18.071 18.071L14.9283 14.9283M10.9999 16.5556V21M7.07154 14.9284L3.92883 18.0711M5.44446 11.0002H1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Loading2.meta = meta;
