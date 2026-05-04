import type { LineCaloriesPoint } from './LineCaloriesChart.types';

export const CHART_PADDING_X = 40;
export const CHART_PADDING_TOP = 32;
export const CHART_PADDING_BOTTOM = 40;
export const KCAL_TAG_GAP = 6;
export const TIMESTAMP_GAP = 10;
export const KCAL_TAG_HEIGHT = 20;
export const TIMESTAMP_HEIGHT = 18;
export const CURVE_TENSION = 0.35;

export interface LayoutPoint {
  index: number;
  x: number;
  y: number;
  time: string;
  kcal: number;
}

export const layoutPoints = (
  points: LineCaloriesPoint[],
  width: number,
  height: number,
): LayoutPoint[] => {
  if (points.length === 0) return [];
  const kcals = points.map((p) => p.kcal);
  const minKcal = Math.min(...kcals);
  const maxKcal = Math.max(...kcals);
  const range = maxKcal - minKcal || 1;

  const innerW = Math.max(0, width - CHART_PADDING_X * 2);
  const innerH = Math.max(0, height - CHART_PADDING_TOP - CHART_PADDING_BOTTOM);

  return points.map((p, i) => {
    const t = points.length === 1 ? 0.5 : i / (points.length - 1);
    const x = CHART_PADDING_X + t * innerW;
    const norm = (p.kcal - minKcal) / range;
    const y = CHART_PADDING_TOP + (1 - norm) * innerH;
    return { index: i, x, y, time: p.time, kcal: p.kcal };
  });
};

/**
 * Catmull-Rom-to-Bezier smoothing. Uses each point plus its neighbours to
 * choose tangent directions, producing a curve that flows through every
 * point without the kinks the previous "horizontal-tangent" cubic produced
 * at sharp value changes.
 */
export const linePath = (laid: LayoutPoint[]): string => {
  if (laid.length === 0) return '';
  const head = laid[0];
  if (!head) return '';
  if (laid.length === 1) return `M ${head.x} ${head.y}`;

  let d = `M ${head.x} ${head.y}`;
  for (let i = 0; i < laid.length - 1; i += 1) {
    const p0 = laid[i - 1] ?? laid[i]!;
    const p1 = laid[i]!;
    const p2 = laid[i + 1]!;
    const p3 = laid[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) * CURVE_TENSION;
    const cp1y = p1.y + (p2.y - p0.y) * CURVE_TENSION;
    const cp2x = p2.x - (p3.x - p1.x) * CURVE_TENSION;
    const cp2y = p2.y - (p3.y - p1.y) * CURVE_TENSION;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
};
