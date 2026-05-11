import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Lightbulb',
  category: 'symbol',
  tags: ["lightbulb"] as const,
} as const;

export function Lightbulb({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-4 -2 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M11 14.3264V17C11 18.1046 10.1046 19 9 19H7C5.89543 19 5 18.1046 5 17L5 14.3264M11 14.3264C13.3649 13.2029 15 10.7924 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264M11 14.3264H5M8 14V10M6 10H10" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

Lightbulb.meta = meta;
