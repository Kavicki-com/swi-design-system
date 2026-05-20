/**
 * Web BackgroundDotsGrid — plain <svg>, evita react-native-svg.
 * Mesma API e geometria da versão nativa (BackgroundDotsGrid.tsx).
 */
import React from 'react';
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
      <svg width="100%" height="100%" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: columns }, (_, i) => (
          <g key={i} transform={`translate(${i * COL_SPACING} 0)`}>
            {COL_DOTS.map((d, di) => (
              <circle key={di} cx={COL_CENTER_X} cy={d.cy} r={d.r} fill={color} />
            ))}
          </g>
        ))}
      </svg>
    </View>
  );
};

BackgroundDotsGrid.displayName = 'BackgroundDotsGrid';
