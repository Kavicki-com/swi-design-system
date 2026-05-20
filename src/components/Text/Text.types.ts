import type { TextProps as RNTextProps } from 'react-native';
import type { typography, fontWeight } from '../../tokens';

export type TextVariant =
  | `subtitle.${keyof typeof typography.subtitle}`
  | `body.${keyof typeof typography.body}`
  | `caption.${keyof typeof typography.caption}`
  | `label.${keyof typeof typography.label}`
  | `badge.${keyof typeof typography.badge}`
  | `link.${keyof typeof typography.link}`;

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
  /**
   * Renders the text in italic style. Native platforms (iOS/Android) only
   * render with the correct italic face if the host has registered an
   * Italic font family (e.g. `Inter-Italic`, `Inter-MediumItalic`); otherwise
   * RN falls back to a synthetic skew. Web resolves via the FontFace API.
   */
  italic?: boolean;
  color?: string;
  children: React.ReactNode;
}
