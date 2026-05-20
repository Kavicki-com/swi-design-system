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

export const BackgroundDotsGrid = ({
  columns = 27,
  color = '#65D040',
  opacity = 0.09,
  width,
  style,
  testID,
}: BackgroundDotsGridProps) => {
  const totalWidth = width ?? (columns - 1) * COL_SPACING + COL_WIDTH;
  const viewBox = `0 0 ${totalWidth} ${COL_HEIGHT}`;
  return (
    <View
      style={[{ width: totalWidth, height: COL_HEIGHT, opacity }, style]}
      pointerEvents="none"
      testID={testID}
    >
      <Svg width="100%" height="100%" viewBox={viewBox}>
        {Array.from({ length: columns }, (_, i) => (
          <G key={i} transform={`translate(${i * COL_SPACING} 0)`}>
            {COL_DOTS.map((d, di) => (
              <Circle key={di} cx={COL_CENTER_X} cy={d.cy} r={d.r} fill={color} />
            ))}
          </G>
        ))}
      </Svg>
    </View>
  );
};

BackgroundDotsGrid.displayName = 'BackgroundDotsGrid';
