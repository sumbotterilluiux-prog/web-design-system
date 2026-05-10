import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Swap',
  category: 'arrow',
  tags: ["swap"] as const,
} as const;

export function Swap({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2 -3 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M13 14H2.99981M13 14C13 14.9319 13 15.3978 13.1522 15.7654C13.3552 16.2554 13.7446 16.6448 14.2346 16.8478C14.6022 17 15.0681 17 16 17C16.9319 17 17.3978 17 17.7654 16.8478C18.2554 16.6448 18.6448 16.2554 18.8478 15.7654C19 15.3978 19 14.9319 19 14C19 13.0681 19 12.6022 18.8478 12.2346C18.6448 11.7446 18.2554 11.3552 17.7654 11.1522C17.3978 11 16.9319 11 16 11C15.0681 11 14.6022 11 14.2346 11.1522C13.7446 11.3552 13.3552 11.7446 13.1522 12.2346C13 12.6022 13 13.0681 13 14ZM3.99981 17L1.70692 14.7071C1.31639 14.3166 1.31639 13.6834 1.70692 13.2929L3.99981 11M7 4C7 5.65685 5.65685 7 4 7C2.34315 7 1 5.65685 1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4ZM7 4L17 4M16 7L18.2929 4.70711C18.6834 4.31658 18.6834 3.68342 18.2929 3.29289L16 1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Swap.meta = meta;
