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
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
