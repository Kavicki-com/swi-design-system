import React, { forwardRef, useState } from 'react';
import { type View } from 'react-native';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import {
  BadgeOverlay,
  BadgeText,
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
      badge,
      iconSize,
      badgePosition = 'overlay',
      onPress,
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const [hovered, setHovered] = useState(false);

    // QA cliente §1.2: estilos de active e hover INVERTIDOS — active ganha a
    // aparência antiga de hover (ink branco + overlay), hover ganha a aparência
    // antiga de active (ink verde, sem overlay).
    const accentColor = disabled
      ? theme.content.disable
      : active
        ? theme.content.dark
        : hovered
          ? theme.content.primary
          : theme.content.medium;

    const showHoverOverlay = active && !disabled;
    const isCompact = variant === 'compact';
    const isMinimal = variant === 'minimal';

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
              <Icon name={icon} size={iconSize ?? (isCompact ? 18 : 22)} color={accentColor} />
            </IconSlot>
          ) : null}
          {!isMinimal ? <Label {...stateProps}>{label}</Label> : null}
        </LabelGroup>
        {!isCompact && !isMinimal ? <Divider {...stateProps} /> : null}
        {showHoverOverlay ? <HoverOverlay $variant={variant} /> : null}
        {badge !== undefined ? (
          <BadgeOverlay $position={badgePosition}>
            <BadgeText>{String(badge)}</BadgeText>
          </BadgeOverlay>
        ) : null}
      </Container>
    );
  },
);

MenuItem.displayName = 'MenuItem';
