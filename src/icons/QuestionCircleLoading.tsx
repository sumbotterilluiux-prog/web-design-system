import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'QuestionCircleLoading',
  category: 'symbol',
  tags: ["question","circle","loading"] as const,
} as const;

export function QuestionCircleLoading({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
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
      <path d="M1.25939 13.2727C1.08971 12.5426 1 11.7818 1 11C1 10.2182 1.08971 9.45741 1.25939 8.72727M9.18182 1.16489C9.77141 1.05659 10.3791 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C10.3791 21 9.77141 20.9434 9.18182 20.8351M6 2.33782C4.63602 3.12684 3.47571 4.22877 2.61721 5.54545M2.61721 16.4545C3.47571 17.7712 4.63602 18.8732 6 19.6622M11 12C12.6569 12 14 10.6569 14 9C14 7.34315 12.6569 6 11 6C9.34315 6 8 7.34315 8 9M10.8124 15.3125H11.1874M10.8124 15.6875H11.1874M11.5 15.5C11.5 15.7761 11.2761 16 11 16C10.7239 16 10.5 15.7761 10.5 15.5C10.5 15.2239 10.7239 15 11 15C11.2761 15 11.5 15.2239 11.5 15.5Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

QuestionCircleLoading.meta = meta;
