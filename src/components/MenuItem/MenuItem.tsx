import React, { forwardRef, useState } from 'react';
import { type View } from 'react-native';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import {
  Container,
  Divider,
  HoverOverlay,
  IconSlot,
  Label,
  LabelGroup,
} from './MenuItem.styles';
import type { MenuItemProps } from './MenuItem.types';

export const MenuItem = forwardRef<View, MenuItemProps>(
  (
    {
      label,
      icon,
      active = false,
      disabled = false,
      onPress,
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const [hovered, setHovered] = useState(false);

    const accentColor = disabled
      ? theme.content.disable
      : active
        ? theme.content.primary
        : hovered
          ? theme.content.dark
          : theme.content.medium;

    const showHoverOverlay = hovered && !disabled && !active;

    return (
      <Container
        ref={ref}
        $active={active}
        $hovered={hovered}
        $disabled={disabled}
        disabled={disabled}
        onPress={disabled ? undefined : onPress}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityState={{ disabled, selected: active }}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 224 }
        }
      >
        <LabelGroup>
          {icon ? (
            <IconSlot>
              <Icon name={icon} size={22} color={accentColor} />
            </IconSlot>
          ) : null}
          <Label $active={active} $hovered={hovered} $disabled={disabled}>
            {label}
          </Label>
        </LabelGroup>
        <Divider $active={active} $hovered={hovered} $disabled={disabled} />
        {showHoverOverlay ? <HoverOverlay /> : null}
      </Container>
    );
  },
);

MenuItem.displayName = 'MenuItem';
