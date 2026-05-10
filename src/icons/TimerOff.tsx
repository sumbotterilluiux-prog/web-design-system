import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'TimerOff',
  category: 'symbol',
  tags: ["timer","off"] as const,
} as const;

export function TimerOff({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.8186 -0.5001 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M4.36277 6L2.36277 4M10.3628 4V1M8.36277 1H12.3628M10.3628 9V12M1.00004 5C1.67892 4.13351 2.47436 3.36272 3.36277 2.71125M18.717 9.64579C20.0175 12.8892 19.3541 16.7367 16.7269 19.364C14.0996 21.9912 10.2521 22.6546 7.00866 21.3541M19.3629 2.99988L16.2074 6.15534M16.2074 6.15534C12.6714 3.1294 7.34535 3.28963 3.99893 6.63606C0.652505 9.98248 0.492268 15.3085 3.51822 18.8446M1.36289 20.9999L3.51822 18.8446L16.2074 6.15534" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

TimerOff.meta = meta;
