import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Label, Pill, Triangle } from './TimeStamp.styles';
import type { TimeStampProps } from './TimeStamp.types';

export const TimeStamp = forwardRef<View, TimeStampProps>(
  ({ time, testID, accessibilityLabel }, ref) => {
    return (
      <Pill
        ref={ref}
        testID={testID}
        accessibilityLabel={accessibilityLabel ?? time}
      >
        <Triangle />
        <Label>{time}</Label>
      </Pill>
    );
  },
);

TimeStamp.displayName = 'TimeStamp';
