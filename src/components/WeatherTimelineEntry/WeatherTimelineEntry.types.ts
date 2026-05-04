import type { WeatherCondition } from '../WeatherIcon';

export interface WeatherTimelineEntryProps {
  condition: WeatherCondition;
  time: string;
  label: string;
  testID?: string;
  accessibilityLabel?: string;
}
