import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Target',
  category: 'symbol',
  tags: ["target"] as const,
} as const;

export function Target({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24.3152 24.3152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M12 12.3152L15 9.31524M23 12.3152C23 18.3904 18.0751 23.3152 12 23.3152C5.92487 23.3152 1 18.3904 1 12.3152C1 6.24011 5.92487 1.31524 12 1.31524M19 12.3152C19 16.1812 15.866 19.3152 12 19.3152C8.13401 19.3152 5 16.1812 5 12.3152C5 8.44925 8.13401 5.31524 12 5.31524M15 8.81524V4.43482C15 4.30021 15.0543 4.1713 15.1505 4.07722L18.1505 1.1454C18.4671 0.835996 19 1.06031 19 1.503V4.81524C19 5.09139 19.2239 5.31524 19.5 5.31524H22.8122C23.2549 5.31524 23.4792 5.84811 23.1698 6.16471L20.238 9.16471C20.1439 9.26097 20.015 9.31524 19.8804 9.31524H15.5C15.2239 9.31524 15 9.09139 15 8.81524Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Target.meta = meta;
