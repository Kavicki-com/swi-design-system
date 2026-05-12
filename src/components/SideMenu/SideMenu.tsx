import React, { forwardRef, useCallback, useState } from 'react';
import { type View } from 'react-native';
import { MenuItem } from '../MenuItem';
import { Container } from './SideMenu.styles';
import type { SideMenuProps } from './SideMenu.types';

export const SideMenu = forwardRef<View, SideMenuProps>(
  (
    {
      items,
      value: controlledValue,
      defaultValue,
      onChange,
      variant,
      fullWidth = false,
      iconSize,
      badgePosition,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const isControlled = controlledValue !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState<string | undefined>(
      defaultValue ?? items[0]?.value,
    );
    const value = isControlled ? controlledValue : uncontrolledValue;

    const handlePress = useCallback(
      (next: string) => {
        if (!isControlled) setUncontrolledValue(next);
        onChange?.(next);
      },
      [isControlled, onChange],
    );

    return (
      <Container
        ref={ref}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 224 }
        }
        accessibilityRole="menu"
        accessibilityLabel={accessibilityLabel}
        testID={testID}
      >
        {items.map((item) => (
          <MenuItem
            key={item.value}
            label={item.label}
            icon={item.icon}
            active={item.value === value}
            disabled={item.disabled}
            variant={item.variant ?? variant}
            badge={item.badge}
            iconSize={iconSize}
            badgePosition={badgePosition}
            onPress={() => handlePress(item.value)}
            fullWidth
          />
        ))}
      </Container>
    );
  },
);

SideMenu.displayName = 'SideMenu';
