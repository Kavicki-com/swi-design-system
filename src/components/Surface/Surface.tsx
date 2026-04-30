import React, { forwardRef } from 'react';
import { View, type View as RNViewRef } from 'react-native';
import { useTheme } from '../../theme';
import { SurfaceContext, toneForVariant } from './SurfaceContext';
import type { SurfaceProps } from './Surface.types';

export const Surface = forwardRef<RNViewRef, SurfaceProps>(
  ({ variant = 'standard', padding = 'm', radius = 'm', children, style, ...rest }, ref) => {
    const theme = useTheme();
    const tone = toneForVariant(variant);
    return (
      <View
        ref={ref}
        style={[
          {
            backgroundColor: theme.surface[variant],
            padding: theme.padding[padding],
            borderRadius: theme.border.radius[radius],
          },
          style,
        ]}
        {...rest}
      >
        <SurfaceContext.Provider value={{ tone }}>{children}</SurfaceContext.Provider>
      </View>
    );
  },
);

Surface.displayName = 'Surface';
