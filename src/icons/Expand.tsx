import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Expand',
  category: 'arrow',
  tags: ["expand"] as const,
} as const;

export function Expand({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-5 -5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M5.58579 8.41421L2.05025 11.9497M8.41421 5.58579L11.9497 2.05025M7 13H2.06066C1.47487 13 1 12.5251 1 11.9393V7M13 7V2.06066C13 1.47487 12.5251 1 11.9393 1H7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Expand.meta = meta;
