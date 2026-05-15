import type { TextProps as RNTextProps } from 'react-native';
import type { typography, fontWeight } from '../../tokens';

export type TextVariant =
  | `subtitle.${keyof typeof typography.subtitle}`
  | `body.${keyof typeof typography.body}`
  | `caption.${keyof typeof typography.caption}`;

/**
 * Overrides the variant's default weight while keeping its family/size.
 * Use for combinations the variant matrix doesn't enumerate (e.g. bold
 * body.m on a date/name label).
 */
export type TextWeight = keyof typeof fontWeight;

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  /** Overrides the variant's default fontWeight. */
  weight?: TextWeight;
  color?: string;
  children: React.ReactNode;
}
