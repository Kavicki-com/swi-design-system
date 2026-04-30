import React, { forwardRef, useState } from 'react';
import { type View } from 'react-native';
import { Body, Container, HoverOverlay, Label } from './Chip.styles';
import type { ChipProps } from './Chip.types';

export const Chip = forwardRef<View, ChipProps>(
  (
    { label, state = 'default', onPress, accessibilityLabel, accessibilityHint, testID },
    ref,
  ) => {
    const [hovered, setHovered] = useState(false);
    const [pressed, setPressed] = useState(false);
    const isDisabled = state === 'disable';

    return (
      <Container
        ref={ref}
        $state={state}
        disabled={isDisabled}
        onPress={isDisabled ? undefined : onPress}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        accessibilityRole="button"
        accessibilityState={{ disabled: isDisabled, selected: state === 'active' }}
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint={accessibilityHint}
        testID={testID}
      >
        <Body $state={state}>
          <Label $state={state}>{label}</Label>
          {!isDisabled && (hovered || pressed) ? <HoverOverlay /> : null}
        </Body>
      </Container>
    );
  },
);

Chip.displayName = 'Chip';
