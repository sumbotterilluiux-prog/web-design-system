import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Contract',
  category: 'arrow',
  tags: ["contract"] as const,
} as const;

export function Contract({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M1 15L5.94972 10.0503M15 1L10.0503 5.94972M1 9L5.93934 9C6.52513 9 7 9.47487 7 10.0607L7 15M9 1L9 5.93934C9 6.52513 9.47487 7 10.0607 7H15" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Contract.meta = meta;
