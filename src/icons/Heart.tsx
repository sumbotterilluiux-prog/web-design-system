import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Heart',
  category: 'symbol',
  tags: ["heart"] as const,
} as const;

export function Heart({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 -1.999 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9932 3.15763C8.99389 0.79848 5.65983 0.163878 3.15478 2.32415C0.649733 4.48442 0.297056 8.09628 2.26429 10.6512C3.89991 12.7755 8.84986 17.2558 10.4722 18.7059C10.6537 18.8681 10.7444 18.9492 10.8503 18.9811C10.9427 19.0089 11.0438 19.0089 11.1362 18.9811C11.242 18.9492 11.3328 18.8681 11.5143 18.7059C13.1366 17.2558 18.0866 12.7755 19.7222 10.6512C21.6894 8.09628 21.3798 4.46169 18.8317 2.32415C16.2836 0.186601 12.9926 0.79848 10.9932 3.15763Z" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Heart.meta = meta;
