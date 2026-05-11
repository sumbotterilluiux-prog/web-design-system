import type { SVGProps } from 'react';

export type IconCategory = 'arrow' | 'symbol';

export interface IconMeta {
  name: string;
  category: IconCategory;
  tags: readonly string[];
}

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'strokeWidth'> {
  size?: number | string;
  /**
   * Numeric only. Stroke icons default to 2; size-aware containers like
   * LeadingIconButton may override per size. Fill-based icons ignore this.
   */
  strokeWidth?: number;
}
