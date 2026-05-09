import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ChevronRightCircle',
  category: 'arrow',
  tags: ["chevron","right","circle"] as const,
} as const;

export function ChevronRightCircle({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M11 8L14.2929 11.2929C14.6834 11.6834 14.6834 12.3166 14.2929 12.7071L11 16M1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ChevronRightCircle.meta = meta;
