/**
 * Native LineCaloriesChart implementation. Web build picks the .web.tsx variant.
 */
import React, { forwardRef, useId } from 'react';
import { type View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
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
    const gradId = `calories-stroke-${useId().replace(/:/g, '')}`;

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
            <Defs>
              <LinearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor={theme.surface.primary} stopOpacity="1" />
                <Stop offset="0.5" stopColor={theme.surface.secondary} stopOpacity="1" />
                <Stop offset="1" stopColor={theme.surface.warning} stopOpacity="1" />
              </LinearGradient>
            </Defs>
            <Path
              d={d}
              fill="none"
              stroke={`url(#${gradId})`}
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
