/**
 * Web HeartrateStatus implementation. See Icon.web.tsx for why the split exists.
 */
import React from 'react';
import { useTheme } from '../../theme';
import { HEARTRATE_STATUS_PATHS } from './HeartrateStatus.paths';
import { conditionColor, conditionLabel } from './HeartrateStatus.theme';
import type { HeartrateStatusProps } from './HeartrateStatus.types';

export const HeartrateStatus = ({
  condition = 'check',
  size = 22,
  testID,
  accessibilityLabel,
}: HeartrateStatusProps) => {
  const theme = useTheme();
  const data = HEARTRATE_STATUS_PATHS[condition];
  const w = (size * data.width) / data.height;

  return (
    <svg
      width={w}
      height={size}
      viewBox={`0 0 ${data.width} ${data.height}`}
      data-testid={testID}
      aria-label={accessibilityLabel ?? `heartrate status ${conditionLabel[condition]}`}
      role="img"
    >
      <path d={data.circle} fill={conditionColor(theme, condition)} />
      <path d={data.symbol} fill={theme.content.dark} />
    </svg>
  );
};

HeartrateStatus.displayName = 'HeartrateStatus';
