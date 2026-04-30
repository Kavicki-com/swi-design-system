import React, { forwardRef } from 'react';
import { Image as RNImage, type Image as RNImageRef } from 'react-native';
import type { ImageProps, ImageResizeMode } from './Image.types';

const RESIZE_MAP: Record<ImageResizeMode, 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'> = {
  cover: 'cover',
  contain: 'contain',
  stretch: 'stretch',
  repeat: 'repeat',
  center: 'center',
  fill: 'stretch',
};

export const Image = forwardRef<RNImageRef, ImageProps>(
  (
    {
      source,
      width,
      height,
      resizeMode = 'cover',
      accessibilityLabel,
      accessibilityHint,
      testID,
      onLoad,
      onError,
    },
    ref,
  ) => {
    const resolvedSource = typeof source === 'string' ? { uri: source } : source;
    return (
      <RNImage
        ref={ref}
        source={resolvedSource}
        style={{ width, height }}
        resizeMode={RESIZE_MAP[resizeMode]}
        accessible={!!accessibilityLabel}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole="image"
        testID={testID}
        onLoad={onLoad}
        onError={onError}
      />
    );
  },
);

Image.displayName = 'Image';
