/**
 * Web BackgroundDotsGrid — plain <svg>, evita react-native-svg.
 * Mesma API e geometria da versão nativa (BackgroundDotsGrid.tsx).
 */
import React, { memo, useMemo } from 'react';
import { View } from 'react-native';
import type { BackgroundDotsGridProps } from './BackgroundDotsGrid.types';

const COL_DOTS: ReadonlyArray<{ cy: number; r: number }> = [
  { cy: 5.35565, r: 5.35565 },
  { cy: 17.816, r: 4.886 },
  { cy: 29.4016, r: 4.444 },
  { cy: 40.8782, r: 4.119 },
  { cy: 52.3546, r: 3.788 },
  { cy: 64.9241, r: 3.4683 },
  { cy: 76.8379, r: 3.142 },
  { cy: 89.6259, r: 2.8189 },
  { cy: 101.212, r: 2.5078 },
  { cy: 113.344, r: 2.486 },
  { cy: 127.334, r: 2.486 },
  { cy: 141.871, r: 1.95 },
  { cy: 156.189, r: 1.64 },
];

const COL_WIDTH = 10.6228;
const COL_HEIGHT = 157.829;
const COL_SPACING = 15.93;
const COL_CENTER_X = COL_WIDTH / 2;
const NATURAL_ROWS = COL_DOTS.length; // 13
const LAST_NATURAL_DOT = COL_DOTS[NATURAL_ROWS - 1]!;
// Pattern de extensão: pra rows > 13, dots adicionais continuam o fade do
// fundo com r=1.64 e spacing vertical de 14.32px (último gap observado entre
// linhas 11→12 do Figma natural). Mantém visual coerente sem distorcer dots.
const EXTRA_DOT_R = 1.64;
const EXTRA_DOT_SPACING = 14.32;
const NATURAL_BOTTOM_MARGIN =
  COL_HEIGHT - (LAST_NATURAL_DOT.cy + LAST_NATURAL_DOT.r);

const resolveDots = (n: number): ReadonlyArray<{ cy: number; r: number }> => {
  if (n <= NATURAL_ROWS) return COL_DOTS.slice(0, n);
  const extras: Array<{ cy: number; r: number }> = [];
  let cy = LAST_NATURAL_DOT.cy;
  for (let i = NATURAL_ROWS; i < n; i += 1) {
    cy += EXTRA_DOT_SPACING;
    extras.push({ cy, r: EXTRA_DOT_R });
  }
  return [...COL_DOTS, ...extras];
};

// T3.16: gera UM único path string com todos os círculos como sub-paths.
const buildDotsPath = (
  columns: number,
  dots: ReadonlyArray<{ cy: number; r: number }>,
): string => {
  let path = '';
  for (let col = 0; col < columns; col += 1) {
    const cx = COL_CENTER_X + col * COL_SPACING;
    for (let i = 0; i < dots.length; i += 1) {
      const d = dots[i]!;
      const r = d.r;
      const d2 = r * 2;
      path += `M${cx - r},${d.cy}a${r},${r} 0 1,0 ${d2},0a${r},${r} 0 1,0 ${-d2},0`;
    }
  }
  return path;
};

export const BackgroundDotsGrid = memo(function BackgroundDotsGrid({
  columns = 27,
  color = '#65D040',
  opacity = 0.09,
  width,
  rows,
  style,
  testID,
}: BackgroundDotsGridProps) {
  const totalWidth = width ?? (columns - 1) * COL_SPACING + COL_WIDTH;
  const dots = rows == null ? COL_DOTS : resolveDots(rows);
  const lastDot = dots[dots.length - 1]!;
  const totalHeight =
    rows == null || rows <= NATURAL_ROWS
      ? COL_HEIGHT
      : lastDot.cy + EXTRA_DOT_R + NATURAL_BOTTOM_MARGIN;
  const viewBox = `0 0 ${totalWidth} ${totalHeight}`;
  const pathData = useMemo(() => buildDotsPath(columns, dots), [columns, dots]);
  return (
    <View
      style={[{ width: totalWidth, height: totalHeight, opacity }, style]}
      pointerEvents="none"
      testID={testID}
    >
      <svg width="100%" height="100%" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <path d={pathData} fill={color} />
      </svg>
    </View>
  );
});

BackgroundDotsGrid.displayName = 'BackgroundDotsGrid';
