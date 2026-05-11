import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'QuestionSquare',
  category: 'symbol',
  tags: ["question","square"] as const,
} as const;

export function QuestionSquare({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
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
      <path d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8M9.81238 14.3125H10.1874M9.81238 14.6875H10.1874M7.4 19H12.6C14.8402 19 15.9603 19 16.816 18.564C17.5686 18.1805 18.1805 17.5686 18.564 16.816C19 15.9603 19 14.8402 19 12.6V7.4C19 5.15979 19 4.03969 18.564 3.18404C18.1805 2.43139 17.5686 1.81947 16.816 1.43597C15.9603 1 14.8402 1 12.6 1H7.4C5.15979 1 4.03969 1 3.18404 1.43597C2.43139 1.81947 1.81947 2.43139 1.43597 3.18404C1 4.03969 1 5.15979 1 7.4V12.6C1 14.8402 1 15.9603 1.43597 16.816C1.81947 17.5686 2.43139 18.1805 3.18404 18.564C4.03969 19 5.15979 19 7.4 19ZM10.5 14.5C10.5 14.7761 10.2761 15 10 15C9.72386 15 9.5 14.7761 9.5 14.5C9.5 14.2239 9.72386 14 10 14C10.2761 14 10.5 14.2239 10.5 14.5Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

QuestionSquare.meta = meta;
