import type { TextProps as RNTextProps } from 'react-native';
import type { typography, fontWeight } from '../../tokens';

export type TitleVariant = `title.${keyof typeof typography.title}`;

/** Overrides the variant's default weight while keeping its family/size. */
export type TitleWeight = keyof typeof fontWeight;

export interface TitleProps extends RNTextProps {
  variant?: TitleVariant;
  /** Overrides the variant's default fontWeight. */
  weight?: TitleWeight;
  color?: string;
  children: React.ReactNode;
}
