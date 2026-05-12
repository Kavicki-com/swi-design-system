import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import { Container, TailWrapper } from './LocationPin.styles';
import type { LocationPinProps, LocationPinStatus } from './LocationPin.types';

/* Status → border color presets. Mirrors Figma employee-pin status indicators
   (avatar ring color encodes worker health/connection state). */
const STATUS_BORDER: Record<LocationPinStatus, string> = {
  good: '#10b981',
  alert: '#f59e0b',
  low: '#ef4444',
  offline: '#6b7280',
};

export const LocationPin = forwardRef<View, LocationPinProps>(
  (
    { avatarUri, status = 'good', borderColor, size = 40, name, tailColor, testID },
    ref,
  ) => {
    const theme = useTheme();
    const resolvedBorder = borderColor ?? STATUS_BORDER[status];
    const resolvedTail = tailColor ?? theme.background;
    const tailSize = Math.round(size * 0.41);

    return (
      <Container ref={ref} testID={testID} accessibilityLabel={name}>
        <Avatar
          uri={avatarUri}
          customSize={size}
          bordered
          borderColor={resolvedBorder}
          accessibilityLabel={name}
        />
        <TailWrapper>
          <Icon name="pin_tail" color={resolvedTail} size={tailSize} />
        </TailWrapper>
      </Container>
    );
  },
);

LocationPin.displayName = 'LocationPin';
