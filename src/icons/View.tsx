import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'View',
  category: 'symbol',
  tags: ["view"] as const,
} as const;

export function View({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.6529 -4 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <g>
      <path d="M1.25618 9.17176C0.914607 8.42865 0.914607 7.57136 1.25618 6.82824C2.83728 3.38843 6.31327 1 10.3471 1C14.3809 1 17.8569 3.38843 19.438 6.82824C19.7796 7.57136 19.7796 8.42865 19.438 9.17176C17.8569 12.6116 14.3809 15 10.3471 15C6.31327 15 2.83728 12.6116 1.25618 9.17176Z" vectorEffect="non-scaling-stroke" />
      <path d="M13.3471 8C13.3471 9.65685 12.004 11 10.3471 11C8.69025 11 7.3471 9.65685 7.3471 8C7.3471 6.34315 8.69025 5 10.3471 5C12.004 5 13.3471 6.34315 13.3471 8Z" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

View.meta = meta;
