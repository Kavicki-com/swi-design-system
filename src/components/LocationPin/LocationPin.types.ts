export type LocationPinStatus = 'good' | 'alert' | 'low' | 'offline';

export type LocationPinVariant = 'avatar' | 'camera';

export type LocationPinProps = {
  /** Visual variant. 'avatar' renders an Avatar circle (worker pin);
   *  'camera' renders a green square card with a camera icon. Default 'avatar'. */
  variant?: LocationPinVariant;
  /** Avatar image URI. Required when variant='avatar'; ignored when variant='camera'. */
  avatarUri?: string;
  /** Status color preset for the avatar border. Default 'good'. Ignored for variant='camera'. */
  status?: LocationPinStatus;
  /** Override the status-derived border color. */
  borderColor?: string;
  /** Body diameter (avatar) or side length (camera) in px. Default 40. */
  size?: number;
  /** Accessible label, typically the operator or camera name. */
  name?: string;
  /** Tail color. Defaults to theme.background (avatar variant) or theme.surface.primary (camera variant). */
  tailColor?: string;
  testID?: string;
};
