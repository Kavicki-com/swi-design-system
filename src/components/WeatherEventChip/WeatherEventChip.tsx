import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Label, Row, TimePill, TimeText } from './WeatherEventChip.styles';
import type { WeatherEventChipProps } from './WeatherEventChip.types';

export const WeatherEventChip = forwardRef<View, WeatherEventChipProps>(
  ({ time, label, accessibilityLabel, testID }, ref) => {
    return (
      <Row
        ref={ref}
        accessibilityLabel={accessibilityLabel ?? `${time} ${label}`}
        testID={testID}
      >
        <TimePill>
          <TimeText>{time}</TimeText>
        </TimePill>
        <Label>{label}</Label>
      </Row>
    );
  },
);

WeatherEventChip.displayName = 'WeatherEventChip';
