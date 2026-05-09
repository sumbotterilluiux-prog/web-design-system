import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'QuestionCircle',
  category: 'symbol',
  tags: ["question","circle"] as const,
} as const;

export function QuestionCircle({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M11 12C12.6569 12 14 10.6569 14 9C14 7.34315 12.6569 6 11 6C9.34315 6 8 7.34315 8 9M10.8124 15.3125H11.1874M10.8124 15.6875H11.1874M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM11.5 15.5C11.5 15.7761 11.2761 16 11 16C10.7239 16 10.5 15.7761 10.5 15.5C10.5 15.2239 10.7239 15 11 15C11.2761 15 11.5 15.2239 11.5 15.5Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

QuestionCircle.meta = meta;
