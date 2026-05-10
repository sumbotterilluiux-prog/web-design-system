import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Switch',
  category: 'arrow',
  tags: ["switch"] as const,
} as const;

export function Switch({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-3.5 -3 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M1 2L15 16M1 16L5 12M11 6L15 2M16 12V16.4107C16 16.7362 15.7362 17 15.4107 17H11M16 6V1.58926C16 1.26382 15.7362 1 15.4107 1H11" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Switch.meta = meta;
