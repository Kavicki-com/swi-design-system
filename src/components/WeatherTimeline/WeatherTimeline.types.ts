import type { WeatherCondition } from '../WeatherIcon';

export interface WeatherTimelineEvent {
  id: string;
  condition: WeatherCondition;
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

export interface WeatherTimelineProps {
  events: WeatherTimelineEvent[];
  intensitySegments?: IntensitySegment[];
  nowLabel?: string;
  fullWidth?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}
