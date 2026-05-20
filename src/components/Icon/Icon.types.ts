import type { IconName } from '../../icons';

export interface IconProps {
  name: IconName;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  /**
   * Optional vertical linear gradient `[topColor, bottomColor]` applied to
   * the path fill. Overrides `color` when provided. Used for selected gender
   * cards (Figma 211:13710) where o ícone faz transition #62BB81 → #50B3D2.
   */
  gradient?: readonly [string, string];
  testID?: string;
  accessibilityLabel?: string;
}
