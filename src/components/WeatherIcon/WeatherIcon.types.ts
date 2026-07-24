export type WeatherCondition = 'sunny' | 'rainy' | 'partly-cloudy' | 'storm';
export type WeatherIconSize = 's' | 'm' | 'l';

export interface WeatherIconProps {
  condition: WeatherCondition;
  /**
   * Troca a ilustração pela variante noturna da mesma condição
   * (sunny → lua, partly-cloudy → nuvem+lua, rainy → chuva com lua).
   * A condição segue sendo a dimensão principal; noite é ortogonal.
   */
  isNight?: boolean;
  size?: WeatherIconSize;
  testID?: string;
  accessibilityLabel?: string;
}
