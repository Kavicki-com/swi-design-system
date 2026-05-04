/**
 * Web LineCaloriesChart — uses raw <svg> instead of react-native-svg
 * (same web/native split pattern as Icon and Silhouette).
 */
import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { CaloriesTag } from '../CaloriesTag';
import { TimeStamp } from '../TimeStamp';
import { useTheme } from '../../theme';
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
    const theme = useTheme();
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
          <svg
            width="100%"
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
          >
            <path
              d={d}
              fill="none"
              stroke={theme.content.secondary}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
