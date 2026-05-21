/**
 * Native LineCaloriesChart implementation. Web build picks the .web.tsx variant.
 */
import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { CaloriesTag } from '../CaloriesTag';
import { TimeStamp } from '../TimeStamp';
import {
  ChartFrame,
  KcalAnchor,
  Layer,
  TimeAnchor,
} from './LineCaloriesChart.styles';
import type { LineCaloriesChartProps } from './LineCaloriesChart.types';
import {
  KCAL_TAG_GAP,
  KCAL_TAG_HEIGHT,
  TIMESTAMP_GAP,
  layoutPoints,
  linePath,
} from './LineCaloriesChart.utils';

const DEFAULT_WIDTH = 1013;
const DEFAULT_HEIGHT = 110;

export const LineCaloriesChart = forwardRef<View, LineCaloriesChartProps>(
  (
    {
      points,
      unit = 'kcal',
      width = DEFAULT_WIDTH,
      height = DEFAULT_HEIGHT,
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const laid = layoutPoints(points, width, height);
    const d = linePath(laid);

    return (
      <ChartFrame
        ref={ref}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%', height }
            : { alignSelf: 'flex-start', width, height }
        }
      >
        <Layer>
          <Svg
            width="100%"
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
          >
            {/* Linha mint solida — Figma 342:10223. Antes era gradient
                tri-color (primary→secondary→warning) que nao batia com
                Figma. FIXME: deveria virar token (theme.surface.cyan ou
                similar) — atualmente nao ha token mint disponivel. */}
            <Path
              d={d}
              fill="none"
              stroke="#8AD2E2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Layer>
        {laid.map((p) => (
          <KcalAnchor
            key={`k-${p.index}`}
            style={{
              left: `${(p.x / width) * 100}%`,
              top: p.y - KCAL_TAG_GAP - KCAL_TAG_HEIGHT,
            }}
          >
            <CaloriesTag value={p.kcal} unit={unit} />
          </KcalAnchor>
        ))}
        {laid.map((p) => (
          <TimeAnchor
            key={`t-${p.index}`}
            style={{
              left: `${(p.x / width) * 100}%`,
              top: p.y + TIMESTAMP_GAP,
            }}
          >
            <TimeStamp time={p.time} />
          </TimeAnchor>
        ))}
      </ChartFrame>
    );
  },
);

LineCaloriesChart.displayName = 'LineCaloriesChart';
