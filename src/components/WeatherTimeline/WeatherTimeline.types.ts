import type { WeatherCondition } from '../WeatherIcon';

export interface WeatherTimelineEvent {
  id: string;
  condition: WeatherCondition;
  /** Variante noturna da ilustração (repassado ao WeatherIcon via entry). */
  isNight?: boolean;
  time: string;
  label: string;
  isNow?: boolean;
}

export type IntensityColor = 'rain' | 'sun' | 'mild' | 'cloudy';

export interface IntensitySegment {
  id: string;
  flex: number;
  color: IntensityColor | string;
}

export interface WeatherTimelineScrollbar {
  /** Width of the visible thumb as a percentage of the track (0-100). */
  thumbPercent: number;
  /** Starting offset of the thumb as a percentage from the left of the track (0-100). Defaults to 0. */
  thumbStartPercent?: number;
}

export interface WeatherTimelineProps {
  events: WeatherTimelineEvent[];
  intensitySegments?: IntensitySegment[];
  nowLabel?: string;
  /**
   * Horizontal position of the AGORA marker as a percentage of the timeline width (0-100).
   * The pole is rendered centered on this point. Takes priority over `event.isNow`.
   */
  nowAtPercent?: number;
  /**
   * Optional scrollbar/scrubber rendered below the timeline (Figma frame 21:1501).
   * Pass `false` or omit to hide.
   */
  scrollbar?: WeatherTimelineScrollbar | false;
  fullWidth?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}
