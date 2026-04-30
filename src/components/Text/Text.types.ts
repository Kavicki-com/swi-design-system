import type { TextProps as RNTextProps } from 'react-native';
import type { typography } from '../../tokens';

export type TextVariant =
  | `subtitle.${keyof typeof typography.subtitle}`
  | `body.${keyof typeof typography.body}`
  | `caption.${keyof typeof typography.caption}`;

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: string;
  children: React.ReactNode;
}
