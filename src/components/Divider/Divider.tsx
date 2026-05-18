import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Layout axis. `horizontal` = full-width 1px line.
   * `vertical` = full-height 1px line; needs a parent that gives it a
   * height (e.g. a flex row with `items-stretch`, the default). */
  orientation?: DividerOrientation;
}

const ORIENTATION_CLASSES: Record<DividerOrientation, string> = {
  horizontal: 'h-px w-full',
  vertical: 'w-px h-full',
};

// `<hr>` carries an implicit ARIA role="separator", so no role prop needed.
// Border + margin are zeroed so the bg-color line is the only visible mark.
const BASE = 'border-0 m-0 bg-(--stroke-color-tertiary)';

export function Divider({
  orientation = 'horizontal',
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      aria-orientation={orientation}
      className={cn(BASE, ORIENTATION_CLASSES[orientation], className)}
      {...props}
    />
  );
}
