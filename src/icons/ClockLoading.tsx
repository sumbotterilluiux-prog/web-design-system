import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ClockLoading',
  category: 'symbol',
  tags: ["clock","loading"] as const,
} as const;

export function ClockLoading({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 -1 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M11.0001 7V11L12.7321 12M1.25939 13.2727C1.08971 12.5426 1 11.7818 1 11C1 10.2182 1.08971 9.45741 1.25939 8.72727M9.18182 1.16489C9.77141 1.05659 10.3791 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C10.3791 21 9.77141 20.9434 9.18182 20.8351M6 2.33782C4.63602 3.12684 3.47571 4.22877 2.61721 5.54545M2.61721 16.4545C3.47571 17.7712 4.63602 18.8732 6 19.6622" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ClockLoading.meta = meta;
