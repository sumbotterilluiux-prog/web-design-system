/**
 * Canonical numeric stroke widths for stroke-based icons. The values are the
 * only widths size-aware components (LeadingIconButton, etc.) should choose
 * from. Stroke width is now a React numeric prop — no CSS-variable tokens.
 */
export const STROKE_WIDTHS = {
  hairline: 0.5,
  thin: 1,
  light: 1.5,
  regular: 2,
  bold: 3,
} as const;

export type StrokeWidthKey = keyof typeof STROKE_WIDTHS;
export type StrokeWidthValue = (typeof STROKE_WIDTHS)[StrokeWidthKey];
