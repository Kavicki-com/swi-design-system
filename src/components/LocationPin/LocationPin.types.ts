export type LocationPinStatus = 'good' | 'alert' | 'low' | 'offline';

export type LocationPinProps = {
  /** Avatar image URI. */
  avatarUri: string;
  /** Status color preset for the avatar border. Default 'good'. */
  status?: LocationPinStatus;
  /** Override the status-derived border color. */
  borderColor?: string;
  /** Avatar diameter in px. Default 40. */
  size?: number;
  /** Accessible label, typically the operator name. */
  name?: string;
  /** Tail color. Defaults to theme.background (dark drop indicator). */
  tailColor?: string;
  testID?: string;
};
