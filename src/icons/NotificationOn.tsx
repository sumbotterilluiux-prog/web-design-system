import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'NotificationOn',
  category: 'symbol',
  tags: ["notification","on"] as const,
} as const;

export function NotificationOn({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.8318 -1 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M13.4868 20.0001C11.4826 21.3334 8.8535 21.3334 6.84932 20.0001M1.00025 5.00006C1.69605 3.40756 2.79461 2.0313 4.16719 1.00006M16.1691 1.00006C17.5417 2.0313 18.6403 3.40756 19.3361 5.00006M3.16817 9.00006C3.16817 5.13407 6.30217 2.00006 10.1682 2.00006C14.0342 2.00006 17.1682 5.13407 17.1682 9.00006V11.5779C17.1682 13.1573 17.6357 14.7013 18.5118 16.0155L18.6499 16.2227C18.8715 16.555 18.6333 17.0001 18.2339 17.0001H2.10242C1.70308 17.0001 1.46488 16.555 1.6864 16.2227L1.82457 16.0155C2.70066 14.7013 3.16817 13.1573 3.16817 11.5779V9.00006Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

NotificationOn.meta = meta;
