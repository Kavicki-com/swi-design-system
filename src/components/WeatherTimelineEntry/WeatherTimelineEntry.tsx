import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { WeatherEventChip } from '../WeatherEventChip';
import { WeatherIcon } from '../WeatherIcon';
import { IconRow, Stack } from './WeatherTimelineEntry.styles';
import type { WeatherTimelineEntryProps } from './WeatherTimelineEntry.types';

export const WeatherTimelineEntry = forwardRef<View, WeatherTimelineEntryProps>(
  ({ condition, time, label, accessibilityLabel, testID }, ref) => {
    return (
      <Stack
        ref={ref}
        accessibilityLabel={accessibilityLabel ?? `${time} ${label}`}
        testID={testID}
      >
        <IconRow>
          <WeatherIcon condition={condition} size="l" />
        </IconRow>
        <WeatherEventChip time={time} label={label} />
      </Stack>
    );
  },
);

WeatherTimelineEntry.displayName = 'WeatherTimelineEntry';
