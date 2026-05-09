import type { SVGProps } from 'react';

export type IconCategory = 'arrow' | 'symbol';

export interface IconMeta {
  name: string;
  category: IconCategory;
  tags: readonly string[];
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
