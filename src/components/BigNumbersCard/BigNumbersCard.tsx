import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import { Card, IconSlot, Label, Value } from './BigNumbersCard.styles';
import type { BigNumbersCardProps } from './BigNumbersCard.types';

export const BigNumbersCard = forwardRef<View, BigNumbersCardProps>(
  (
    {
      value,
      label,
      icon,
      iconColor,
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    return (
      <Card
        ref={ref}
        accessibilityLabel={accessibilityLabel ?? `${value} ${label}`}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 'max-content' as unknown as number }
        }
      >
        {icon ? (
          <IconSlot>
            <Icon name={icon} size={20} color={iconColor ?? theme.content.primary} />
          </IconSlot>
        ) : null}
        <Value numberOfLines={1}>{value}</Value>
        <Label numberOfLines={1}>{label}</Label>
      </Card>
    );
  },
);

BigNumbersCard.displayName = 'BigNumbersCard';
