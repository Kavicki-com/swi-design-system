/**
 * Web HeartStatus implementation. See Icon.web.tsx for why the split exists.
 */
import React from 'react';
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
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${HEART_STATUS_CANVAS.width} ${HEART_STATUS_CANVAS.height}`}
      data-testid={testID}
      aria-label={accessibilityLabel ?? `heart status ${conditionLabel[condition]}`}
      role="img"
    >
      <path d={HEART_PATH} fill={theme.content.dark} />
      <g transform={`translate(${HEART_STATUS_BADGE_OFFSET.x} ${HEART_STATUS_BADGE_OFFSET.y})`}>
        <path d={badge.circle} fill={conditionColor(theme, condition)} />
        <path d={badge.symbol} fill={theme.content.dark} />
      </g>
    </svg>
  );
};

HeartStatus.displayName = 'HeartStatus';
