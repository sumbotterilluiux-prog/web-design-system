import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ClockSleep',
  category: 'symbol',
  tags: ["clock","sleep"] as const,
} as const;

export function ClockSleep({ size = 24, className, ...props }: IconProps) {
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
      <path d="M11.0001 7V11L12.7321 12M1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1M2 2H5.99661C5.99681 2 5.99701 2.00006 5.99717 2.00017L5.99739 2.00032C5.99767 2.0005 5.99784 2.00082 5.99783 2.00116L5.99783 2.00177C5.99782 2.00203 5.99772 2.00228 5.99753 2.00247L2.00239 5.99761C2.00225 5.99775 2.00216 5.99792 2.00212 5.99812L2.00207 5.99838C2.002 5.99871 2.00211 5.99905 2.00235 5.99929L2.00279 5.99972C2.00298 5.9999 2.00323 6 2.00349 6H6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ClockSleep.meta = meta;
