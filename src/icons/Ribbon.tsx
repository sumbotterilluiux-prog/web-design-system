import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Ribbon',
  category: 'symbol',
  tags: ["ribbon"] as const,
} as const;

export function Ribbon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 21.9983"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M3.33333 12.9994V20.4276C3.33333 20.8984 3.88211 21.1672 4.26667 20.8847L6.6 19.1705C7.42963 18.561 8.57037 18.561 9.4 19.1705L11.7333 20.8847C12.1179 21.1672 12.6667 20.8984 12.6667 20.4276V12.9994M15 7.85679C15 11.6437 11.866 14.7136 8 14.7136C4.13401 14.7136 1 11.6437 1 7.85679C1 4.06989 4.13401 1 8 1C11.866 1 15 4.06989 15 7.85679Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Ribbon.meta = meta;
