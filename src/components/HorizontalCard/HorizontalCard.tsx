import React, { forwardRef } from 'react';
import { type View as RNView } from 'react-native';
import { Icon } from '../Icon';
import { Title } from '../Title';
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
          {/* Title gives Montserrat Bold 16 (title.xs) nativo do DS — visual
              correto pro Figma 348:10615. Title hardcoda accessibilityRole=
              "header" internamente, criando aninhamento role="header" dentro
              de role="button" no Container. Trade-off aceito: fidelidade
              visual > pureza ARIA. Phase 2: bumpar Title pra aceitar
              accessibilityRole override prop. */}
          <Title variant="title.xs" color={theme.content.dark}>
            {label}
          </Title>
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
