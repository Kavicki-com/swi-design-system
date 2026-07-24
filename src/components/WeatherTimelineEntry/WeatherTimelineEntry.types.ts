import type { WeatherCondition } from '../WeatherIcon';

export interface WeatherTimelineEntryProps {
  condition: WeatherCondition;
  /** Variante noturna da ilustração (repassado ao WeatherIcon). */
  isNight?: boolean;
  time: string;
  label: string;
  testID?: string;
  accessibilityLabel?: string;
}
