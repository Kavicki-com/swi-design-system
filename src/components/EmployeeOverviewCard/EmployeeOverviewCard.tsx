import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { ProgressBar } from '../ProgressBar';
import { useTheme } from '../../theme';
import {
  Card,
  Divider,
  HealthOverview,
  LeftCluster,
  LocationButton,
  Name,
  ProgressSlot,
  Sector,
  Stat,
  StatText,
  TextStack,
  UserInfo,
} from './EmployeeOverviewCard.styles';
import type { EmployeeOverviewCardProps } from './EmployeeOverviewCard.types';

export const EmployeeOverviewCard = forwardRef<View, EmployeeOverviewCardProps>(
  (
    {
      employee,
      progress = 0,
      bpm,
      pressure,
      bpmUnit = 'Bpm',
      onLocationPress,
      onPress,
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();

    return (
      <Card
        ref={ref}
        onPress={onPress}
        accessibilityRole={onPress ? 'button' : undefined}
        accessibilityLabel={accessibilityLabel ?? employee.name}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 602 }
        }
      >
        <LeftCluster>
          <UserInfo>
            <Avatar uri={employee.avatarUri} customSize={56} />
            <TextStack>
              <Name>{employee.name}</Name>
              <Sector>{employee.sector}</Sector>
              <ProgressSlot>
                <ProgressBar value={progress} color={theme.surface.info} />
              </ProgressSlot>
            </TextStack>
          </UserInfo>
          <Divider />
          <HealthOverview>
            <Stat>
              <Icon name="favorite" size={24} color={theme.surface.error} />
              <StatText>{`${bpm} ${bpmUnit}`}</StatText>
            </Stat>
            <Stat>
              <Icon name="monitor_heart" size={24} color={theme.surface.success} />
              <StatText>{pressure}</StatText>
            </Stat>
          </HealthOverview>
        </LeftCluster>
        <LocationButton
          onPress={onLocationPress}
          accessibilityRole="button"
          accessibilityLabel="Localização"
        >
          <Icon name="location_on" size={24} color={theme.content.dark} />
        </LocationButton>
      </Card>
    );
  },
);

EmployeeOverviewCard.displayName = 'EmployeeOverviewCard';
