import type { TextProps as RNTextProps } from 'react-native';
import type { typography } from '../../tokens';

export type TitleVariant = `title.${keyof typeof typography.title}`;

export interface TitleProps extends RNTextProps {
  variant?: TitleVariant;
  color?: string;
  children: React.ReactNode;
}
