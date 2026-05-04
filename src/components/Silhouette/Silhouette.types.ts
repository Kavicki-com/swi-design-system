export type SilhouetteGender = 'male' | 'female';

export interface SilhouetteProps {
  gender?: SilhouetteGender;
  height?: number;
  showHeart?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}

export interface SilhouettePaths {
  width: number;
  height: number;
  body: string;
  heart: string;
}
