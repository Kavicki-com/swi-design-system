export type LogoType = 'complete' | 'symbol';
export type LogoSize = 's' | 'm' | 'l';

export interface LogoProps {
  type?: LogoType;
  size?: LogoSize;
  color?: string;
  testID?: string;
  accessibilityLabel?: string;
}
