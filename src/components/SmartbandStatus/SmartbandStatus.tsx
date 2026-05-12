import React from 'react';
import { useTheme } from '../../theme';
import { Icon } from '../Icon';
import { ProgressBar } from '../ProgressBar';
import {
  Container,
  IconSlot,
  Message,
  SyncCell,
  SyncRow,
  Value,
} from './SmartbandStatus.styles';
import type { SmartbandStatusProps } from './SmartbandStatus.types';

export const SmartbandStatus = ({
  progress,
  heartRate = null,
  bloodPressure = null,
  message,
  testID,
  accessibilityLabel,
}: SmartbandStatusProps) => {
  const theme = useTheme();
  const synced = progress >= 1;
  const heartActive = synced || heartRate != null;
  const pressureActive = synced || bloodPressure != null;
  const heartColor = heartActive ? theme.content.dark : theme.content.medium;
  const pressureColor = pressureActive ? theme.content.dark : theme.content.medium;

  return (
    <Container testID={testID} accessibilityLabel={accessibilityLabel ?? message}>
      <ProgressBar value={progress} />
      <SyncRow>
        <SyncCell>
          <IconSlot>
            <Icon name="favorite" size={47} color={heartColor} />
          </IconSlot>
          <Value $active={heartActive}>{heartRate != null ? String(heartRate) : '/'}</Value>
        </SyncCell>
        <SyncCell>
          <IconSlot>
            <Icon name="blood_pressure" size={47} color={pressureColor} />
          </IconSlot>
          <Value $active={pressureActive}>
            {bloodPressure != null ? bloodPressure : '/'}
          </Value>
        </SyncCell>
      </SyncRow>
      <Message>{message}</Message>
    </Container>
  );
};

SmartbandStatus.displayName = 'SmartbandStatus';
