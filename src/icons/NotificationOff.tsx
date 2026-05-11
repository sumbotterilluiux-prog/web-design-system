import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'NotificationOff',
  category: 'symbol',
  tags: ["notification","off"] as const,
} as const;

export function NotificationOff({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2.25 -1 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M12.8187 20C10.8146 21.3333 8.18546 21.3333 6.18127 20M2.34248 12.1575C2.44674 11.64 2.5 11.1109 2.5 10.5778V8C2.5 4.13401 5.63401 1 9.5 1C10.6603 1 11.7546 1.28229 12.7181 1.78193M15.7181 4.78193C16.2177 5.7454 16.5 6.83973 16.5 8V10.5778C16.5 12.1572 16.9675 13.7013 17.8436 15.0154L17.9818 15.2226C18.2033 15.5549 17.9651 16 17.5657 16H4.5M15.7181 4.78193L18.5 2M1 19.5L4.5 16L15.7181 4.78193" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

NotificationOff.meta = meta;
