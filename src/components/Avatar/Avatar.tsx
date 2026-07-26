import React, { forwardRef } from 'react';
import { Image as RNImage, type View } from 'react-native';
import { useTheme } from '../../theme';
import { Frame, Initials } from './Avatar.styles';
import { initialsFrom } from './Avatar.initials';
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
      name,
      size = 'm',
      customSize,
      bordered = false,
      borderWidth = 2,
      borderColor,
      fallbackBackgroundColor,
      testID,
      accessibilityLabel,
    },
    ref,
  ) => {
    const theme = useTheme();
    const px = customSize ?? SIZE_MAP[size];
    // Vários call sites já passam o nome como accessibilityLabel; aceitar os
    // dois evita ter que tocar em 21 arquivos do admin pra ganhar o fallback.
    const initials = initialsFrom(name ?? accessibilityLabel);
    return (
      <Frame
        ref={ref}
        $size={px}
        $bordered={bordered}
        $borderWidth={borderWidth}
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
        ) : initials ? (
          // Sem foto, as iniciais são a única pista de QUEM é a linha — a
          // moldura vazia virava um disco cinza igual pra todo mundo (0.1.120).
          <Initials $size={px}>{initials}</Initials>
        ) : null}
      </Frame>
    );
  },
);

Avatar.displayName = 'Avatar';
