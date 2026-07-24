import type { IconName } from '../../icons';
import type { AvatarGroupItem } from '../AvatarGroup';

export interface ActivitiesOverviewCardProps {
  title: string;
  subtitle?: string;
  progress: number;
  progressColor?: string;
  progressTrackColor?: string;
  icon?: IconName;
  iconColor?: string;
  avatars: AvatarGroupItem[];
  totalAvatarsCount?: number;
  maxVisibleAvatars?: number;
  locationIcon?: IconName | null;
  onPress?: () => void;
  onLocationPress?: () => void;
  /**
   * Label acessível do pino de localização. Default 'Open location'
   * (retrocompat) — hosts pt-BR devem sobrescrever.
   */
  locationAccessibilityLabel?: string;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
