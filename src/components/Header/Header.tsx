import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { HeaderUserInfo } from '../HeaderUserInfo';
import { Logo } from '../Logo';
import { Bar } from './Header.styles';
import type { HeaderProps } from './Header.types';

export const Header = forwardRef<View, HeaderProps>(
  (
    {
      logoSize = 'm',
      logoType = 'complete',
      fullWidth = true,
      bpm,
      pressure,
      progress,
      avatarUri,
      bpmUnit,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    return (
      <Bar
        ref={ref}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start' }
        }
      >
        <Logo type={logoType} size={logoSize} />
        <HeaderUserInfo
          bpm={bpm}
          pressure={pressure}
          progress={progress}
          avatarUri={avatarUri}
          bpmUnit={bpmUnit}
        />
      </Bar>
    );
  },
);

Header.displayName = 'Header';
