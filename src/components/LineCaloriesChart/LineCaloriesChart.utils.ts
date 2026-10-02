import type { LineCaloriesPoint } from './LineCaloriesChart.types';

export const CHART_PADDING_X = 40;
export const CHART_PADDING_TOP = 32;
export const CHART_PADDING_BOTTOM = 40;
// Gap entre callout (CaloriesTag) e o data point. Figma 342:10223 mostra
// callout proximo da linha — antes era 6, descendo pra 2 aproxima visual.
export const KCAL_TAG_GAP = 2;
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

/**
 * Posiciona os pontos medidos. O ponto sem medicao (kcal null) continua
 * contando no eixo do tempo, para o buraco aparecer no lugar certo, mas nao
 * vira ponto nem entra na escala vertical. Sem nenhum valor, nada e desenhado.
 */
export const layoutPoints = (
  points: LineCaloriesPoint[],
  width: number,
  height: number,
): LayoutPoint[] => {
  const kcals = points.flatMap((p) => (p.kcal === null ? [] : [p.kcal]));
  if (kcals.length === 0) return [];
  const minKcal = Math.min(...kcals);
  const maxKcal = Math.max(...kcals);
  const range = maxKcal - minKcal || 1;

  const innerW = Math.max(0, width - CHART_PADDING_X * 2);
  const innerH = Math.max(0, height - CHART_PADDING_TOP - CHART_PADDING_BOTTOM);

  return points.flatMap((p, i) => {
    if (p.kcal === null) return [];
    const t = points.length === 1 ? 0.5 : i / (points.length - 1);
    const x = CHART_PADDING_X + t * innerW;
    const norm = (p.kcal - minKcal) / range;
    const y = CHART_PADDING_TOP + (1 - norm) * innerH;
    return [{ index: i, x, y, time: p.time, kcal: p.kcal }];
  });
};

/** Trechos continuos: um buraco no indice abre um trecho novo. */
export const segmentsOf = (laid: LayoutPoint[]): LayoutPoint[][] => {
  const segments: LayoutPoint[][] = [];
  for (const p of laid) {
    const current = segments[segments.length - 1];
    const prev = current?.[current.length - 1];
    if (current && prev && p.index === prev.index + 1) current.push(p);
    else segments.push([p]);
  }
  return segments;
};

/**
 * Caminho da linha por trechos, cada um comecando com o proprio M, para a
 * curva nunca atravessar um periodo sem medicao. Sem buraco, o resultado e
 * o mesmo de linePath.
 */
export const segmentedPath = (laid: LayoutPoint[]): string =>
  segmentsOf(laid)
    .map(linePath)
    .filter((d) => d !== '')
    .join(' ');

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
