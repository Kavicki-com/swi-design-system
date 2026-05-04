import React from 'react';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import type { IconName } from '../../icons';
import type { LogoProps, LogoSize, LogoType } from './Logo.types';

const SIZE_HEIGHT: Record<LogoSize, number> = {
  s: 32,
  m: 48,
  l: 64,
};

const ASPECT: Record<LogoType, number> = {
  complete: 200 / 60.89,
  symbol: 102 / 60.89,
};

const ICON_NAME: Record<LogoType, IconName> = {
  complete: 'swi_logo_complete',
  symbol: 'swi_logo_symbol',
};

export const Logo = ({
  type = 'complete',
  size = 'm',
  color,
  testID,
  accessibilityLabel,
}: LogoProps) => {
  const theme = useTheme();
  const height = SIZE_HEIGHT[size];
  const width = Math.round(height * ASPECT[type]);
  return (
    <Icon
      name={ICON_NAME[type]}
      width={width}
      height={height}
      color={color ?? theme.content.dark}
      testID={testID}
      accessibilityLabel={accessibilityLabel ?? 'SWI'}
    />
  );
};

Logo.displayName = 'Logo';
