import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Flag, FlagText, Pole, Stack } from './NowMarker.styles';
import type { NowMarkerProps } from './NowMarker.types';

export const NowMarker = forwardRef<View, NowMarkerProps>(
  ({ label = 'AGORA', height = 80, accessibilityLabel, testID }, ref) => {
    return (
      <Stack
        ref={ref}
        accessibilityLabel={accessibilityLabel ?? label}
        testID={testID}
      >
        <Flag>
          <FlagText>{label}</FlagText>
        </Flag>
        <Pole $height={height} />
      </Stack>
    );
  },
);

NowMarker.displayName = 'NowMarker';
