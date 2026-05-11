import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Star',
  category: 'symbol',
  tags: ["star"] as const,
} as const;

export function Star({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.1112 -1.5707 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path d="M10.4404 1.27872C10.6238 0.907094 11.1537 0.907094 11.3371 1.27872L14.0053 6.68491C14.0781 6.83248 14.2189 6.93477 14.3817 6.95843L20.3478 7.82535C20.7579 7.88495 20.9217 8.38893 20.6249 8.6782L16.3078 12.8863C16.19 13.0012 16.1362 13.1667 16.164 13.3289L17.1832 19.2709C17.2532 19.6793 16.8245 19.9908 16.4577 19.798L11.1215 16.9925C10.9758 16.916 10.8018 16.916 10.6561 16.9925L5.31988 19.798C4.95306 19.9908 4.52435 19.6793 4.5944 19.2709L5.61353 13.3289C5.64135 13.1667 5.58758 13.0012 5.46973 12.8863L1.15263 8.6782C0.855875 8.38893 1.01963 7.88495 1.42974 7.82535L7.39583 6.95843C7.55868 6.93477 7.69947 6.83248 7.7723 6.68491L10.4404 1.27872Z" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth={strokeWidth}  />
    </svg>
  );
}

Star.meta = meta;
