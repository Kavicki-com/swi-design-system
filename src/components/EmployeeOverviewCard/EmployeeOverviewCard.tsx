import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { ProgressBar } from '../ProgressBar';
import { useTheme } from '../../theme';
import {
  AbsenceText,
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
import { missingReadingLabel, readingText } from '../../utils/reading';

export const EmployeeOverviewCard = forwardRef<View, EmployeeOverviewCardProps>(
  (
    {
      employee,
      progress = 0,
      bpm,
      pressure,
      absenceLabel,
      bpmUnit = 'Bpm',
      onLocationPress,
      onPress,
      fullWidth = false,
      actionElement,
      borderColor,
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
        accessibilityLabel={
          accessibilityLabel ??
          (absenceLabel ? `${employee.name}, ${absenceLabel}` : undefined) ??
          missingReadingLabel(employee.name, [bpm, pressure]) ?? employee.name
        }
        testID={testID}
        $borderColor={borderColor}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 602 }
        }
      >
        <LeftCluster>
          <UserInfo>
            <Avatar uri={employee.avatarUri} customSize={56} bordered />
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
            {/* Sem relogio nao ha leitura nenhuma: a frase toma a coluna em
                vez de dois "--" que pareceriam uma falha momentanea. */}
            {absenceLabel ? (
              <AbsenceText numberOfLines={2}>{absenceLabel}</AbsenceText>
            ) : (
              <>
                <Stat>
                  <Icon name="favorite_filled" size={24} color={theme.surface.error} />
                  {/* Sem leitura a unidade continua ao lado ("-- Bpm"): o slot
                      mantem a largura e o leitor ve que o campo e batimento. */}
                  <StatText>{`${readingText(bpm)} ${bpmUnit}`}</StatText>
                </Stat>
                <Stat>
                  <Icon name="pressure_wheel_filled" size={24} color={theme.surface.primary} />
                  <StatText>{readingText(pressure)}</StatText>
                </Stat>
              </>
            )}
          </HealthOverview>
        </LeftCluster>
        {actionElement ?? (
          <LocationButton
            onPress={onLocationPress}
            accessibilityRole="button"
            accessibilityLabel="Localização"
          >
            <Icon name="location_on_filled" size={24} color={theme.content.dark} />
          </LocationButton>
        )}
      </Card>
    );
  },
);

EmployeeOverviewCard.displayName = 'EmployeeOverviewCard';
