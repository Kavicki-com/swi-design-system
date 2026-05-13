import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import { CameraBody, Container, TailWrapper } from './LocationPin.styles';
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
    {
      variant = 'avatar',
      avatarUri,
      status = 'good',
      borderColor,
      size = 40,
      name,
      tailColor,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const resolvedBorder = borderColor ?? STATUS_BORDER[status];
    /* Default tail: dark drop indicator for avatar pins (theme.background),
       green primary for camera pins so the tail blends into the body color. */
    const resolvedTail =
      tailColor ?? (variant === 'camera' ? theme.surface.primary : theme.background);
    const tailSize = Math.round(size * 0.41);

    return (
      <Container ref={ref} testID={testID} accessibilityLabel={name}>
        {variant === 'camera' ? (
          <CameraBody $size={size} accessibilityLabel={name}>
            <Icon
              name="video_camera_back"
              color={theme.content.dark}
              size={Math.round(size * 0.55)}
            />
          </CameraBody>
        ) : (
          <Avatar
            uri={avatarUri ?? ''}
            customSize={size}
            bordered
            borderColor={resolvedBorder}
            accessibilityLabel={name}
          />
        )}
        <TailWrapper>
          <Icon name="pin_tail" color={resolvedTail} size={tailSize} />
        </TailWrapper>
      </Container>
    );
  },
);

LocationPin.displayName = 'LocationPin';
