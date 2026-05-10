import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Label1',
  category: 'symbol',
  tags: ["label","1"] as const,
} as const;

export function Label1({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.4132 -1.4142 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M14.7982 5.62494H15.5482M14.7982 6.37494H15.5482M18.1734 1H10.9957C10.465 1 9.9561 1.21089 9.58099 1.58625L1.58532 9.5872C0.805263 10.3678 0.80484 11.6327 1.58437 12.4137L8.74065 19.5844C9.52092 20.3662 10.7872 20.3675 11.5691 19.5872L19.5862 11.586C19.9622 11.2108 20.1735 10.7015 20.1735 10.1704L20.1734 2.99999C20.1734 1.89542 19.278 1 18.1734 1ZM16.1735 6C16.1735 6.55228 15.7257 7 15.1735 7C14.6212 7 14.1735 6.55228 14.1735 6C14.1735 5.44772 14.6212 5 15.1735 5C15.7257 5 16.1735 5.44772 16.1735 6Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Label1.meta = meta;
