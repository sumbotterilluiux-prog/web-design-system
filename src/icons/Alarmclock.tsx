import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Alarmclock',
  category: 'symbol',
  tags: ["alarmclock"] as const,
} as const;

export function Alarmclock({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-0.911 -1.3026 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M1.00012 4.8948C2.03317 3.29467 3.43653 1.95605 5.08899 1.00017M17.0889 1.00017C18.7414 1.95605 20.1447 3.29467 21.1778 4.8948M11.0002 8.00017V12.0002L12.7322 13.0002M20.089 11.3948C20.089 16.3654 16.0595 20.3948 11.089 20.3948C6.1184 20.3948 2.08896 16.3654 2.08896 11.3948C2.08896 6.42423 6.1184 2.3948 11.089 2.3948C16.0595 2.3948 20.089 6.42423 20.089 11.3948Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

Alarmclock.meta = meta;
