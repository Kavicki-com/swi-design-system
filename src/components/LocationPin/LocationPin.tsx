import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import { BadgeBody, CameraBody, Container, TailWrapper } from './LocationPin.styles';
import type { LocationPinProps, LocationPinStatus } from './LocationPin.types';

/* Status → border color presets. Mirrors Figma employee-pin status indicators
   (avatar ring color encodes worker health/connection state). */
const STATUS_BORDER: Record<LocationPinStatus, string> = {
  good: '#10b981',
  alert: '#f59e0b',
  low: '#ef4444',
  offline: '#6b7280',
};

/* Status → solid fill for badge variant. Hex values come from the Figma
   alert-pin SVG exports (Badge.svg, Badge-1.svg, Polygon 1-2.svg). */
const STATUS_BADGE_FILL: Record<LocationPinStatus, string> = {
  good: '#3EAB2E',
  alert: '#EF8600',
  low: '#F5667A',
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
    const badgeFill = borderColor ?? STATUS_BADGE_FILL[status];
    const resolvedTail =
      tailColor ??
      (variant === 'camera'
        ? theme.surface.primary
        : variant === 'badge'
          ? badgeFill
          : theme.background);
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
        ) : variant === 'badge' ? (
          <BadgeBody $size={size} $fill={badgeFill} accessibilityLabel={name}>
            <Icon
              name={status === 'good' ? 'check_circle' : 'error'}
              color="#F5F5F5"
              size={size}
            />
          </BadgeBody>
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
