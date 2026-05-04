import React, { forwardRef } from 'react';
import { Image as RNImage, type View } from 'react-native';
import { useTheme } from '../../theme';
import { Frame } from './Avatar.styles';
import type { AvatarProps, AvatarSize } from './Avatar.types';

const SIZE_MAP: Record<AvatarSize, number> = {
  s: 24,
  m: 40,
  l: 64,
};

export const Avatar = forwardRef<View, AvatarProps>(
  (
    {
      uri,
      size = 'm',
      customSize,
      bordered = false,
      borderColor,
      fallbackBackgroundColor,
      testID,
      accessibilityLabel,
    },
    ref,
  ) => {
    const theme = useTheme();
    const px = customSize ?? SIZE_MAP[size];
    return (
      <Frame
        ref={ref}
        $size={px}
        $bordered={bordered}
        $borderColor={borderColor ?? theme.content.dark}
        $bg={fallbackBackgroundColor ?? theme.surface.medium}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
      >
        {uri ? (
          <RNImage
            source={{ uri }}
            style={{ width: '100%', height: '100%' }}
            accessibilityRole="image"
          />
        ) : null}
      </Frame>
    );
  },
);

Avatar.displayName = 'Avatar';
