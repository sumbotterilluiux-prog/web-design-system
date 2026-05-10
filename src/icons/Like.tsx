import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'Like',
  category: 'symbol',
  tags: ["like"] as const,
} as const;

export function Like({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.4992 -2.0001 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M1 8.99983V17.9998M4 9.11067V16.6881C4 17.9648 5.08062 18.9998 6.41364 18.9998H15.9357C17.0699 18.9998 18.0512 18.2434 18.2936 17.1821L19.9716 9.8346C20.1363 9.11373 19.5631 8.4317 18.7927 8.4317H14.258C12.9249 8.4317 11.8443 7.39668 11.8443 6.11991V4.52167C11.8443 3.3247 11.3479 2.17675 10.4642 1.33037C9.93288 0.821467 9.04663 0.912667 8.64031 1.51806L4.38334 7.86056C4.13306 8.23344 4 8.66738 4 9.11067Z" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

Like.meta = meta;
