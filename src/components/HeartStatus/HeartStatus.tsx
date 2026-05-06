/**
 * Native HeartStatus implementation (RN — iOS/Android).
 *
 * Web build picks HeartStatus.web.tsx instead. See Icon.web.tsx for why
 * this split exists (react-native-svg ESM/CJS interop breaks Vite).
 */
import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { useTheme } from '../../theme';
import { HEARTRATE_STATUS_PATHS } from '../HeartrateStatus/HeartrateStatus.paths';
import {
  conditionColor,
  conditionLabel,
} from '../HeartrateStatus/HeartrateStatus.theme';
import {
  HEART_PATH,
  HEART_STATUS_BADGE_OFFSET,
  HEART_STATUS_CANVAS,
} from './HeartStatus.paths';
import type { HeartStatusProps } from './HeartStatus.types';

export const HeartStatus = ({
  condition = 'check',
  size,
  testID,
  accessibilityLabel,
}: HeartStatusProps) => {
  const theme = useTheme();
  const h = size ?? HEART_STATUS_CANVAS.height;
  const w = (h * HEART_STATUS_CANVAS.width) / HEART_STATUS_CANVAS.height;
  const badge = HEARTRATE_STATUS_PATHS[condition];

  return (
    <Svg
      width={w}
      height={h}
      viewBox={`0 0 ${HEART_STATUS_CANVAS.width} ${HEART_STATUS_CANVAS.height}`}
      testID={testID}
      accessibilityLabel={accessibilityLabel ?? `heart status ${conditionLabel[condition]}`}
      accessibilityRole="image"
    >
      <Path d={HEART_PATH} fill={theme.content.dark} />
      <G x={HEART_STATUS_BADGE_OFFSET.x} y={HEART_STATUS_BADGE_OFFSET.y}>
        <Path d={badge.circle} fill={conditionColor(theme, condition)} />
        <Path d={badge.symbol} fill={theme.content.dark} />
      </G>
    </Svg>
  );
};

HeartStatus.displayName = 'HeartStatus';
