export type SilhouetteGender = 'male' | 'female';

export interface SilhouetteProps {
  gender?: SilhouetteGender;
  height?: number;
  showHeart?: boolean;
  /**
   * When true, fills the body with a 4-stop thermal gradient
   * (red → orange → yellow → green from head to feet). Used in the
   * AdminDetails / WorkerDetails screens (Figma 53:6344, 159:15651)
   * to indicate heat / heart-rate distribution across the body.
   * Default false keeps the original primary-green gradient.
   */
  heatGradient?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}

export interface SilhouettePaths {
  width: number;
  height: number;
  body: string;
  heart: string;
}
