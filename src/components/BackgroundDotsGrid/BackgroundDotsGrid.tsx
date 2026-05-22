/**
 * Native BackgroundDotsGrid — usa react-native-svg.
 * Web build pega BackgroundDotsGrid.web.tsx (plain <svg> para evitar issues
 * de interop ESM/CJS do react-native-svg no Vite/bundlers web — mesmo
 * pattern de Icon/SuccessBadge).
 */
import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import type { BackgroundDotsGridProps } from './BackgroundDotsGrid.types';

// Spec exato extraído do Figma `Repetição de grade 4` (364:16538):
// - 27 colunas idênticas de 13 dots cada
// - Cada coluna 10.6228 × 157.829 (SVG natural)
// - Spacing horizontal entre colunas: 15.93px (medido do x dos Groups)
// - Cor #65D040 com opacity 0.09
// Cada dot é definido por seu `cy` (vertical) e `r` (raio). Dots ficam maiores
// no topo (r=5.36) e menores no fundo (r=1.64), criando o efeito de fade.
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
// Last dot in the natural pattern — used both for the bottom margin
// computation and as the seed for the extension fade. Non-null assertion
// is safe because COL_DOTS is a non-empty constant defined just above.
const LAST_NATURAL_DOT = COL_DOTS[NATURAL_ROWS - 1]!;
// Pattern de extensão: pra rows > 13, dots adicionais continuam o fade do
// fundo com r=1.64 e spacing vertical de 14.32px (último gap observado entre
// linhas 11→12 do Figma natural). Mantém visual coerente sem distorcer dots.
const EXTRA_DOT_R = 1.64;
const EXTRA_DOT_SPACING = 14.32;
const NATURAL_BOTTOM_MARGIN =
  COL_HEIGHT - (LAST_NATURAL_DOT.cy + LAST_NATURAL_DOT.r);

// Resolve a lista de dots para um row count `n`. Quando `n <= 13`, usa o
// pattern natural truncado. Quando `n > 13`, anexa linhas continuando o
// pattern do fundo.
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

export const BackgroundDotsGrid = ({
  columns = 27,
  color = '#65D040',
  opacity = 0.09,
  width,
  rows,
  style,
  testID,
}: BackgroundDotsGridProps) => {
  const totalWidth = width ?? (columns - 1) * COL_SPACING + COL_WIDTH;
  const dots = rows == null ? COL_DOTS : resolveDots(rows);
  // Altura intrínseca: pra `rows` natural ou menor, mantém COL_HEIGHT (157.829)
  // pra preservar back-compat exata. Pra rows > 13, altura cresce até cobrir
  // o último dot + raio + margem inferior natural (≈1.64).
  const lastDot = dots[dots.length - 1]!;
  const totalHeight =
    rows == null || rows <= NATURAL_ROWS
      ? COL_HEIGHT
      : lastDot.cy + EXTRA_DOT_R + NATURAL_BOTTOM_MARGIN;
  const viewBox = `0 0 ${totalWidth} ${totalHeight}`;
  return (
    <View
      style={[{ width: totalWidth, height: totalHeight, opacity }, style]}
      pointerEvents="none"
      testID={testID}
    >
      <Svg width="100%" height="100%" viewBox={viewBox}>
        {Array.from({ length: columns }, (_, i) => (
          <G key={i} transform={`translate(${i * COL_SPACING} 0)`}>
            {dots.map((d, di) => (
              <Circle key={di} cx={COL_CENTER_X} cy={d.cy} r={d.r} fill={color} />
            ))}
          </G>
        ))}
      </Svg>
    </View>
  );
};

BackgroundDotsGrid.displayName = 'BackgroundDotsGrid';
