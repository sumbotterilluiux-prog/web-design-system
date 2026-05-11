import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Label3',
  category: 'symbol',
  tags: ["label","3"] as const,
} as const;

export function Label3({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.4133 -1.4142 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M9.17345 8L13.1735 12M6.17345 11L10.1735 15M14.7982 5.62494H15.5482M14.7982 6.37494H15.5482M18.1734 1H11.8245C10.7632 1 9.74535 1.42179 8.99512 2.17251L1.58532 9.5872C0.805265 10.3678 0.804839 11.6327 1.58437 12.4137L8.74065 19.5844C9.52092 20.3662 10.7872 20.3675 11.5691 19.5872L18.999 12.1721C19.7509 11.4217 20.1734 10.403 20.1734 9.34079L20.1734 2.99999C20.1734 1.89542 19.278 1 18.1734 1ZM16.1735 6C16.1735 6.55228 15.7257 7 15.1735 7C14.6212 7 14.1735 6.55228 14.1735 6C14.1735 5.44772 14.6212 5 15.1735 5C15.7257 5 16.1735 5.44772 16.1735 6Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

Label3.meta = meta;
