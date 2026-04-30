import type { ImageSourcePropType } from 'react-native';

export type ImageResizeMode = 'cover' | 'fill' | 'contain' | 'repeat' | 'stretch' | 'center';

export interface ImageProps {
  source: ImageSourcePropType | string;
  width: number;
  height: number;
  resizeMode?: ImageResizeMode;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
  onLoad?: () => void;
  onError?: () => void;
}
