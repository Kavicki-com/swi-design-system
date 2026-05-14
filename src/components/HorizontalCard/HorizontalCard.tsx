import React, { forwardRef } from 'react';
import { type View as RNView } from 'react-native';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { useTheme } from '../../theme';
import { elevation } from '../../tokens';
import {
  Container,
  LabelSlot,
  LeftSlot,
  RightSlot,
} from './HorizontalCard.styles';
import type { HorizontalCardProps } from './HorizontalCard.types';

/**
 * HorizontalCard — full-width list-item card with a bold label and a
 * chevron-right. Used for the mobile Settings list (Figma 348:10615).
 *
 * Distinct from `MenuItem` (side-menu entry; no chevron, different
 * padding/height rules and per-state bg swaps). Keep both — they
 * solve different layout problems.
 */
export const HorizontalCard = forwardRef<RNView, HorizontalCardProps>(
  (
    {
      label,
      leftIcon,
      rightIcon = 'keyboard_arrow_right',
      onPress,
      disabled = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    return (
      <Container
        ref={ref}
        $disabled={disabled}
        disabled={disabled}
        style={elevation.sm}
        onPress={disabled ? undefined : onPress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityState={{ disabled }}
        testID={testID}
      >
        {leftIcon ? (
          <LeftSlot>
            <Icon name={leftIcon} size={20} color={theme.content.dark} />
          </LeftSlot>
        ) : null}
        <LabelSlot>
          <Text
            variant="body.m"
            color={theme.content.dark}
            style={{
              fontFamily: theme.fontFamily.title,
              fontWeight: theme.fontWeight.bold,
              fontSize: theme.fontSize.ms,
            }}
          >
            {label}
          </Text>
        </LabelSlot>
        <RightSlot>
          {/* Chevron dimensions 7.4×12 per Figma 348:10615 right-slot spec */}
          <Icon
            name={rightIcon}
            width={7.4}
            height={12}
            color={theme.content.dark}
          />
        </RightSlot>
      </Container>
    );
  },
);

HorizontalCard.displayName = 'HorizontalCard';
