import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { NowMarker } from '../NowMarker';
import { WeatherTimelineEntry } from '../WeatherTimelineEntry';
import { useTheme } from '../../theme';
import {
  Container,
  EventColumn,
  EventsRow,
  IntensityRow,
  IntensitySegmentView,
  NowFloat,
} from './WeatherTimeline.styles';
import type {
  IntensityColor,
  WeatherTimelineEvent,
  WeatherTimelineProps,
} from './WeatherTimeline.types';

const NOW_HEIGHT = 132;

export const WeatherTimeline = forwardRef<View, WeatherTimelineProps>(
  (
    {
      events,
      intensitySegments,
      nowLabel = 'AGORA',
      fullWidth = true,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();

    const intensityColor = (c: IntensityColor | string): string => {
      switch (c) {
        case 'rain':
          return theme.surface.secondary;
        case 'sun':
          return theme.surface.warning;
        case 'mild':
          return theme.surface.secondaryLight;
        case 'cloudy':
          return theme.surface.success;
        default:
          return c;
      }
    };

    const fallbackSegments = events.map<{
      id: string;
      flex: number;
      color: string;
    }>((e) => ({
      id: e.id,
      flex: 1,
      color: intensityColor(
        e.condition === 'rainy' ? 'rain' : e.condition === 'sunny' ? 'sun' : 'mild',
      ),
    }));

    const segments = intensitySegments
      ? intensitySegments.map((s) => ({ ...s, color: intensityColor(s.color) }))
      : fallbackSegments;

    return (
      <Container
        ref={ref}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start' }
        }
      >
        <EventsRow>
          {events.map((event: WeatherTimelineEvent) => (
            <EventColumn key={event.id}>
              {event.isNow ? (
                <NowFloat>
                  <NowMarker label={nowLabel} height={NOW_HEIGHT} />
                </NowFloat>
              ) : null}
              <WeatherTimelineEntry
                condition={event.condition}
                time={event.time}
                label={event.label}
              />
            </EventColumn>
          ))}
        </EventsRow>
        <IntensityRow>
          {segments.map((seg) => (
            <IntensitySegmentView key={seg.id} $flex={seg.flex} $bg={seg.color} />
          ))}
        </IntensityRow>
      </Container>
    );
  },
);

WeatherTimeline.displayName = 'WeatherTimeline';
