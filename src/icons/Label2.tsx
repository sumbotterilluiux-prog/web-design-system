import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Label2',
  category: 'symbol',
  tags: ["label","2"] as const,
} as const;

export function Label2({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21.1734 21.1716"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M4.16613 7.00468L9.58099 1.58625C9.9561 1.21089 10.465 1 10.9957 1H18.1734C19.278 1 20.1734 1.89542 20.1734 2.99999L20.1734 10.1704C20.1735 10.7015 19.9622 11.2108 19.5862 11.586L14.1615 17L11.5691 19.5872C10.7872 20.3675 9.52092 20.3662 8.74065 19.5844L1.58437 12.4137C0.804839 11.6327 0.805265 10.3678 1.58532 9.5872L4.16613 7.00468ZM14.1615 17L4.16613 7.00468M14.7982 5.62494H15.5482M14.7982 6.37494H15.5482M16.1735 6C16.1735 6.55228 15.7257 7 15.1735 7C14.6212 7 14.1735 6.55228 14.1735 6C14.1735 5.44772 14.6212 5 15.1735 5C15.7257 5 16.1735 5.44772 16.1735 6Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Label2.meta = meta;
