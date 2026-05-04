export type WeatherCondition = 'sunny' | 'rainy' | 'partly-cloudy';
export type WeatherIconSize = 's' | 'm' | 'l';

export interface WeatherIconProps {
  condition: WeatherCondition;
  size?: WeatherIconSize;
  testID?: string;
  accessibilityLabel?: string;
}
