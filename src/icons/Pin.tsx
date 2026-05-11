import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Pin',
  category: 'symbol',
  tags: ["pin"] as const,
} as const;

export function Pin({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.7385 -1.7385 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M6 14.523L1 19.523M1.28284 8.80586L11.7172 19.2402C11.8337 19.3567 12.0333 19.2902 12.0566 19.127L12.9057 13.183C12.9669 12.7546 13.1654 12.3576 13.4714 12.0516L15.6083 9.91473C15.8646 9.65841 16.1858 9.47657 16.5374 9.38866L19.1433 8.7372C19.5203 8.64293 19.6504 8.17339 19.3756 7.89857L12.6244 1.14746C12.3496 0.87264 11.8801 1.0027 11.7858 1.37974L11.1344 3.98559C11.0464 4.33725 10.8646 4.65841 10.6083 4.91473L8.4714 7.05161C8.16541 7.3576 7.76842 7.5561 7.34003 7.61729L1.39598 8.46644C1.23283 8.48975 1.16631 8.68932 1.28284 8.80586Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

Pin.meta = meta;
