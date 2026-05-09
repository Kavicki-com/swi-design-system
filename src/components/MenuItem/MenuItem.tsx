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
      variant = 'default',
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
    const isCompact = variant === 'compact';

    const stateProps = {
      $active: active,
      $hovered: hovered,
      $disabled: disabled,
      $variant: variant,
    };

    return (
      <Container
        ref={ref}
        {...stateProps}
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
        {isCompact ? <Divider {...stateProps} /> : null}
        <LabelGroup>
          {icon ? (
            <IconSlot>
              <Icon name={icon} size={isCompact ? 18 : 22} color={accentColor} />
            </IconSlot>
          ) : null}
          <Label {...stateProps}>{label}</Label>
        </LabelGroup>
        {!isCompact ? <Divider {...stateProps} /> : null}
        {showHoverOverlay ? <HoverOverlay $variant={variant} /> : null}
      </Container>
    );
  },
);

MenuItem.displayName = 'MenuItem';
