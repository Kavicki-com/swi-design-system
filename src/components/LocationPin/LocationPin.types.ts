export type LocationPinStatus = 'good' | 'alert' | 'low' | 'offline';

export type LocationPinVariant = 'avatar' | 'camera' | 'badge';

export type LocationPinProps = {
  /** Visual variant. 'avatar' renders an Avatar circle (worker pin);
   *  'camera' renders a green square card with a camera icon;
   *  'badge' renders a solid status-colored circle with an inner glyph
   *  (check for 'good', exclamation for 'alert'/'low'). Default 'avatar'. */
  variant?: LocationPinVariant;
  /** Avatar image URI. Required when variant='avatar'; ignored otherwise. */
  avatarUri?: string;
  /** Status color preset. Default 'good'. Drives avatar border (avatar variant)
   *  and body fill + inner glyph (badge variant). Ignored for variant='camera'. */
  status?: LocationPinStatus;
  /** Override the status-derived border color (avatar) or body fill (badge). */
  borderColor?: string;
  /** Body diameter (avatar/badge) or side length (camera) in px. Default 40. */
  size?: number;
  /** Accessible label, typically the operator or camera name. */
  name?: string;
  /** Tail color. Defaults: theme.background (avatar), theme.surface.primary
   *  (camera), or the body fill (badge). */
  tailColor?: string;
  testID?: string;
};
