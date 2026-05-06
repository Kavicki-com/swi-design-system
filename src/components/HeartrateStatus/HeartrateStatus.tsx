/**
 * Native HeartrateStatus implementation (RN — iOS/Android).
 *
 * Web build picks HeartrateStatus.web.tsx instead. See Icon.web.tsx for why
 * this split exists (react-native-svg ESM/CJS interop breaks Vite).
 */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
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
    <Svg
      width={w}
      height={size}
      viewBox={`0 0 ${data.width} ${data.height}`}
      testID={testID}
      accessibilityLabel={accessibilityLabel ?? `heartrate status ${conditionLabel[condition]}`}
      accessibilityRole="image"
    >
      <Path d={data.circle} fill={conditionColor(theme, condition)} />
      <Path d={data.symbol} fill={theme.content.dark} />
    </Svg>
  );
};

HeartrateStatus.displayName = 'HeartrateStatus';
