import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Power',
  category: 'symbol',
  tags: ["power"] as const,
} as const;

export function Power({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2 -1.5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M6 2.93552C3.03656 4.40822 1 7.46628 1 11C1 15.9706 5.02944 20 10 20C14.9706 20 19 15.9706 19 11C19 7.46628 16.9634 4.40822 14 2.93552M10 1V7" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

Power.meta = meta;
