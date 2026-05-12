import React, { forwardRef, useRef, useState } from 'react';
import {
  PanResponder,
  ScrollView,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
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
  RulerLine,
  RulerRow,
  ScrollThumb,
  ScrollTrack,
} from './WeatherTimeline.styles';
import type {
  IntensityColor,
  WeatherTimelineEvent,
  WeatherTimelineProps,
} from './WeatherTimeline.types';

// Ruler matches Figma frame 48:3046: 17 vertical lines distributed edge-to-edge.
// Every 4th line (0, 4, 8, 12, 16) is a "major" tick (20px tall), the rest are
// "minor" (12px). 5 majors carve the timeline into 4 segments with 3 minor
// subticks each — a quarter-hour scale.
const RULER_LINES: ReadonlyArray<{ id: string; major: boolean }> = Array.from(
  { length: 17 },
  (_, i) => ({ id: `ruler-${i}`, major: i % 4 === 0 }),
);

// Total marker height — Figma frame 21:1478 = 100 tall. Pole runs the full height
// on the left; Flag (30 tall) overlays the top of the pole on the right.
const NOW_POLE_HEIGHT = 100;

export const WeatherTimeline = forwardRef<View, WeatherTimelineProps>(
  (
    {
      events,
      intensitySegments,
      nowLabel = 'AGORA',
      nowAtPercent,
      scrollbar,
      fullWidth = true,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const scrollViewRef = useRef<ScrollView>(null);
    const [scrollMetrics, setScrollMetrics] = useState({
      contentWidth: 0,
      containerWidth: 0,
      scrollX: 0,
    });
    // Mirror state into a ref so PanResponder closures (created once) read the
    // latest values without recreating handlers each render.
    const metricsRef = useRef(scrollMetrics);
    metricsRef.current = scrollMetrics;

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

    // Resolve AGORA position. nowAtPercent (new API) wins; otherwise fall back
    // to the centre of the first event flagged isNow (legacy API).
    const computedNowPercent = (() => {
      if (typeof nowAtPercent === 'number') return nowAtPercent;
      const idx = events.findIndex((e) => e.isNow);
      if (idx >= 0 && events.length > 0) {
        return ((idx + 0.5) / events.length) * 100;
      }
      return undefined;
    })();

    const scrollEnabled = !!scrollbar;

    // When scrollbar is enabled and we have measured the ScrollView, compute the
    // thumb size + offset from real scroll metrics. Until the first onScroll
    // (which also reports contentSize / layoutMeasurement), fall back to the
    // values the consumer passed.
    const scrollbarRender: { thumbPercent: number; thumbStartPercent: number } | null =
      (() => {
        if (!scrollbar) return null;
        const { containerWidth, contentWidth, scrollX } = scrollMetrics;
        if (containerWidth > 0 && contentWidth > containerWidth) {
          const thumbPercent = (containerWidth / contentWidth) * 100;
          const maxScroll = contentWidth - containerWidth;
          const thumbStartPercent =
            maxScroll > 0 ? (scrollX / maxScroll) * (100 - thumbPercent) : 0;
          return { thumbPercent, thumbStartPercent };
        }
        return {
          thumbPercent: scrollbar.thumbPercent,
          thumbStartPercent: scrollbar.thumbStartPercent ?? 0,
        };
      })();

    const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
      const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
      setScrollMetrics({
        contentWidth: contentSize.width,
        containerWidth: layoutMeasurement.width,
        scrollX: contentOffset.x,
      });
    };

    // PanResponder for dragging the thumb. Created once via useRef so the
    // gesture machinery is stable; handlers read fresh scroll metrics through
    // metricsRef and trigger programmatic scrollTo on the ScrollView.
    const dragInitialScrollRef = useRef<number | null>(null);
    const thumbPanResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          dragInitialScrollRef.current = metricsRef.current.scrollX;
        },
        onPanResponderMove: (_e, gesture) => {
          if (dragInitialScrollRef.current === null || !scrollViewRef.current) return;
          const { containerWidth, contentWidth } = metricsRef.current;
          if (containerWidth <= 0 || contentWidth <= containerWidth) return;
          const thumbWidthPx = (containerWidth / contentWidth) * containerWidth;
          const trackTravelPx = containerWidth - thumbWidthPx;
          if (trackTravelPx <= 0) return;
          const maxScroll = contentWidth - containerWidth;
          const next =
            dragInitialScrollRef.current + (gesture.dx / trackTravelPx) * maxScroll;
          const clamped = Math.max(0, Math.min(maxScroll, next));
          scrollViewRef.current.scrollTo({ x: clamped, animated: false });
        },
        onPanResponderRelease: () => {
          dragInitialScrollRef.current = null;
        },
        onPanResponderTerminate: () => {
          dragInitialScrollRef.current = null;
        },
      }),
    ).current;

    const innerContent = (
      <>
        <EventsRow>
          {events.map((event: WeatherTimelineEvent) => (
            <EventColumn key={event.id}>
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
        <RulerRow>
          {RULER_LINES.map((line) => (
            <RulerLine key={line.id} $major={line.major} />
          ))}
        </RulerRow>
        {computedNowPercent !== undefined ? (
          <NowFloat style={{ left: `${computedNowPercent}%` }}>
            <NowMarker label={nowLabel} height={NOW_POLE_HEIGHT} />
          </NowFloat>
        ) : null}
      </>
    );

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
        {scrollEnabled ? (
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={handleScroll}
            onLayout={(e) =>
              setScrollMetrics((prev) => ({
                ...prev,
                containerWidth: e.nativeEvent.layout.width,
              }))
            }
            onContentSizeChange={(width) =>
              setScrollMetrics((prev) => ({ ...prev, contentWidth: width }))
            }
            style={{ alignSelf: 'stretch' }}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View
              style={{
                flex: 1,
                alignSelf: 'stretch',
                position: 'relative',
              }}
            >
              {innerContent}
            </View>
          </ScrollView>
        ) : (
          innerContent
        )}
        {scrollbarRender ? (
          <ScrollTrack>
            <ScrollThumb
              {...thumbPanResponder.panHandlers}
              style={{
                width: `${scrollbarRender.thumbPercent}%`,
                marginLeft: `${scrollbarRender.thumbStartPercent}%`,
              }}
            />
          </ScrollTrack>
        ) : null}
      </Container>
    );
  },
);

WeatherTimeline.displayName = 'WeatherTimeline';
