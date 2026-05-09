import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Archive',
  category: 'symbol',
  tags: ["archive"] as const,
} as const;

export function Archive({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M15 1.03838V8.50519C15 8.99077 15 9.23356 14.8988 9.36739C14.8106 9.48399 14.6757 9.55614 14.5298 9.56485C14.3623 9.57486 14.1603 9.44018 13.7562 9.17083L12.4438 8.29584C12.2834 8.18892 12.2032 8.13546 12.1165 8.11469C12.0399 8.09634 11.9601 8.09634 11.8835 8.11469C11.7968 8.13546 11.7166 8.18892 11.5562 8.29584L10.2438 9.17083C9.83973 9.44018 9.63772 9.57486 9.4702 9.56485C9.32426 9.55614 9.18945 9.48399 9.10125 9.36739C9 9.23356 9 8.99077 9 8.50519V1M9 1H7.4C5.15979 1 4.03969 1 3.18404 1.43597C2.43139 1.81947 1.81947 2.43139 1.43597 3.18404C1 4.03969 1 5.15979 1 7.4V12.6C1 14.8402 1 15.9603 1.43597 16.816C1.81947 17.5686 2.43139 18.1805 3.18404 18.564C4.03969 19 5.15979 19 7.4 19H12.6C14.8402 19 15.9603 19 16.816 18.564C17.5686 18.1805 18.1805 17.5686 18.564 16.816C19 15.9603 19 14.8402 19 12.6V7.4C19 5.15979 19 4.03969 18.564 3.18404C18.1805 2.43139 17.5686 1.81947 16.816 1.43597C16.1606 1.10205 15.3501 1.02389 14 1.00559C13.5874 1 13.1244 1 12.6 1H10H9Z" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Archive.meta = meta;
