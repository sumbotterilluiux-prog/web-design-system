import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Dislike',
  category: 'symbol',
  tags: ["dislike"] as const,
} as const;

export function Dislike({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.4992 -2.0001 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M1 11V2M4 10.8892V3.31178C4 2.03502 5.08062 1 6.41364 1H15.9357C17.0699 1 18.0512 1.75646 18.2936 2.81776L19.9716 10.1652C20.1363 10.8861 19.5631 11.5681 18.7927 11.5681H14.258C12.9249 11.5681 11.8443 12.6032 11.8443 13.8799V15.4782C11.8443 16.6751 11.3479 17.8231 10.4642 18.6695C9.93288 19.1784 9.04663 19.0872 8.64031 18.4818L4.38334 12.1393C4.13306 11.7664 4 11.3324 4 10.8892Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

Dislike.meta = meta;
