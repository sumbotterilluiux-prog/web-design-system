import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'InfoSquare',
  category: 'symbol',
  tags: ["info","square"] as const,
} as const;

export function InfoSquare({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M10 14.01V9.01001M10 6.01001V6.00001M7.4 19H12.6C14.8402 19 15.9603 19 16.816 18.564C17.5686 18.1805 18.1805 17.5686 18.564 16.816C19 15.9603 19 14.8402 19 12.6V7.4C19 5.15979 19 4.03969 18.564 3.18404C18.1805 2.43139 17.5686 1.81947 16.816 1.43597C15.9603 1 14.8402 1 12.6 1H7.4C5.15979 1 4.03969 1 3.18404 1.43597C2.43139 1.81947 1.81947 2.43139 1.43597 3.18404C1 4.03969 1 5.15979 1 7.4V12.6C1 14.8402 1 15.9603 1.43597 16.816C1.81947 17.5686 2.43139 18.1805 3.18404 18.564C4.03969 19 5.15979 19 7.4 19Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

InfoSquare.meta = meta;
