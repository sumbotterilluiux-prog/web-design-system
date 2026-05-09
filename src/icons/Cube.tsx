import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Cube',
  category: 'symbol',
  tags: ["cube"] as const,
} as const;

export function Cube({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19.3205 21.3812"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M9.66016 10.6906V16.6906M9.66016 10.6906L14.6602 7.35727M9.66016 10.6906L4.66016 7.35727M2 5.11325L8.66025 1.26795C9.27906 0.910684 10.0415 0.910684 10.6603 1.26795L17.3205 5.11325C17.9393 5.47051 18.3205 6.13077 18.3205 6.8453V14.5359C18.3205 15.2504 17.9393 15.9107 17.3205 16.268L10.6603 20.1132C10.0415 20.4705 9.27906 20.4705 8.66025 20.1132L2 16.268C1.3812 15.9107 1 15.2504 1 14.5359V6.8453C1 6.13077 1.3812 5.47051 2 5.11325Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Cube.meta = meta;
