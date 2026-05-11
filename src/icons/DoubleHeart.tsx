import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'DoubleHeart',
  category: 'symbol',
  tags: ["heart"] as const,
} as const;

export function DoubleHeart({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.2221 -1.499 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M20.0001 8.41063C20.864 10.0095 20.7222 11.9998 19.5617 13.507C18.2896 15.1592 14.4396 18.6438 13.1778 19.7717C13.0366 19.8979 12.966 19.9609 12.8837 19.9857C12.8119 20.0074 12.7332 20.0074 12.6614 19.9857C12.579 19.9609 12.5084 19.8979 12.3673 19.7717C11.9445 19.3938 11.2313 18.7514 10.4217 18.002M8.77254 2.6786C7.21749 0.843705 4.62434 0.350125 2.67596 2.03033C0.72759 3.71054 0.453286 6.51977 1.98335 8.50696C3.2555 10.1592 7.10547 13.6438 8.36728 14.7717C8.50845 14.8979 8.57903 14.9609 8.66137 14.9857C8.73322 15.0074 8.81185 15.0074 8.88371 14.9857C8.96605 14.9609 9.03663 14.8979 9.1778 14.7717C10.4396 13.6438 14.2896 10.1592 15.5617 8.50696C17.0918 6.51977 16.851 3.69287 14.8691 2.03033C12.8873 0.367799 10.3276 0.843705 8.77254 2.6786Z" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

DoubleHeart.meta = meta;
