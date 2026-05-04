import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { AvatarGroup } from '../AvatarGroup';
import { Icon } from '../Icon';
import { ProgressBar } from '../ProgressBar';
import { useTheme } from '../../theme';
import {
  Card,
  Divider,
  IconSlot,
  InfoColumn,
  LeftContent,
  LocationButton,
  ProgressSlot,
  RightContent,
  Subtitle,
  Title,
} from './ActivitiesOverviewCard.styles';
import type { ActivitiesOverviewCardProps } from './ActivitiesOverviewCard.types';

export const ActivitiesOverviewCard = forwardRef<View, ActivitiesOverviewCardProps>(
  (
    {
      title,
      subtitle,
      progress,
      progressColor,
      progressTrackColor,
      icon = 'build',
      iconColor,
      avatars,
      totalAvatarsCount,
      maxVisibleAvatars = 5,
      locationIcon = 'location_on',
      onPress,
      onLocationPress,
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const contentColor = iconColor ?? theme.content.dark;

    return (
      <Card
        ref={ref}
        onPress={onPress}
        accessibilityRole={onPress ? 'button' : undefined}
        accessibilityLabel={accessibilityLabel ?? title}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start' }
        }
      >
        <LeftContent>
          <IconSlot>
            <Icon name={icon} size={18} color={contentColor} />
          </IconSlot>
          <Divider />
          <InfoColumn>
            <Title numberOfLines={1}>{title}</Title>
            {subtitle ? <Subtitle numberOfLines={1}>{subtitle}</Subtitle> : null}
            <ProgressSlot>
              <ProgressBar
                value={progress}
                color={progressColor}
                trackColor={progressTrackColor}
                accessibilityLabel={`${title} progress`}
              />
            </ProgressSlot>
          </InfoColumn>
        </LeftContent>

        <RightContent>
          <AvatarGroup
            avatars={avatars}
            totalCount={totalAvatarsCount}
            maxVisible={maxVisibleAvatars}
            size="m"
            bordered
          />
          {locationIcon ? (
            <LocationButton
              onPress={onLocationPress}
              accessibilityRole={onLocationPress ? 'button' : undefined}
              accessibilityLabel={onLocationPress ? 'Open location' : undefined}
            >
              <Icon name={locationIcon} size={24} color={contentColor} />
            </LocationButton>
          ) : null}
        </RightContent>
      </Card>
    );
  },
);

ActivitiesOverviewCard.displayName = 'ActivitiesOverviewCard';
