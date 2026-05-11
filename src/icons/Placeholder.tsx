import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Placeholder',
  category: 'symbol',
  tags: ["placeholder"] as const,
} as const;

export function Placeholder({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2.3398 -1.3094 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path
        d="M8.66025 1.26795L2 5.11325C1.3812 5.47051 1 6.13077 1 6.8453V14.5359C1 15.2504 1.3812 15.9107 2 16.2679L8.66025 20.1132C9.27906 20.4705 10.0415 20.4705 10.6603 20.1132L17.3205 16.2679C17.9393 15.9107 18.3205 15.2504 18.3205 14.5359V6.8453C18.3205 6.13077 17.9393 5.47051 17.3205 5.11325L10.6603 1.26795C10.0415 0.910684 9.27906 0.910684 8.66025 1.26795Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

Placeholder.meta = meta;
