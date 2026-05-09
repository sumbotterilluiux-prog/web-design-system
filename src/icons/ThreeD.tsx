import { cn } from '../lib/cn';
import type { IconMeta, IconProps } from './types';

const meta: IconMeta = {
  name: 'ThreeD',
  category: 'symbol',
  tags: ["3d"] as const,
} as const;

export function ThreeD({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19.3205 21.8453"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        'stroke-[var(--stroke-color-default)] [stroke-width:var(--stroke-width-selected)]',
        className,
      )}
      {...props}
    >
      <path d="M9.66025 10.9226V13.4226M9.66025 10.9226L7.49519 9.67265M9.66025 10.9226L11.8253 9.67265M9.66025 17.1726V20.8453M1.06686 15.8837L4.24759 14.0476M9.66025 1V4.67265M15.0729 7.79765L18.2534 5.9611M1.06701 5.96129L4.24759 7.79765M15.0729 14.0476L18.2535 15.8839M1 13.4226V15.634C1 15.8126 1.0953 15.9777 1.25 16.067L3.16506 17.1726M1 8.42265V6.21133C1 6.03269 1.0953 5.86763 1.25 5.77831L3.16506 4.67265M7.49519 19.6726L9.41026 20.7783C9.56496 20.8676 9.75556 20.8676 9.91026 20.7783L11.8253 19.6726M16.1554 17.1726L18.0705 16.067C18.2252 15.9777 18.3205 15.8126 18.3205 15.634V13.4226M18.3205 8.42265V6.21133C18.3205 6.03269 18.2252 5.86763 18.0705 5.77831L16.1554 4.67265M11.8253 2.17265L9.91026 1.06699C9.75556 0.977671 9.56496 0.977671 9.41026 1.06699L7.49519 2.17265" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

ThreeD.meta = meta;
