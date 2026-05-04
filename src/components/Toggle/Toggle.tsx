import React, { forwardRef, useCallback, useState } from 'react';
import { type View } from 'react-native';
import { Row, SideLabel, Thumb, Track } from './Toggle.styles';
import type { ToggleProps } from './Toggle.types';

export const Toggle = forwardRef<View, ToggleProps>(
  (
    {
      value: controlledValue,
      defaultValue = false,
      onChange,
      disabled = false,
      leftLabel,
      rightLabel,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const isControlled = controlledValue !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const value = isControlled ? controlledValue : uncontrolledValue;

    const handlePress = useCallback(() => {
      if (disabled) return;
      const next = !value;
      if (!isControlled) setUncontrolledValue(next);
      onChange?.(next);
    }, [disabled, isControlled, onChange, value]);

    const track = (
      <Track
        $disabled={disabled}
        $on={value}
        disabled={disabled}
        onPress={disabled ? undefined : handlePress}
        accessibilityRole="switch"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ checked: value, disabled }}
        testID={testID}
      >
        <Thumb $on={value} />
      </Track>
    );

    if (!leftLabel && !rightLabel) {
      return React.cloneElement(track, { ref });
    }

    return (
      <Row ref={ref}>
        {leftLabel ? (
          <SideLabel $active={!value} $disabled={disabled}>
            {leftLabel}
          </SideLabel>
        ) : null}
        {track}
        {rightLabel ? (
          <SideLabel $active={value} $disabled={disabled}>
            {rightLabel}
          </SideLabel>
        ) : null}
      </Row>
    );
  },
);

Toggle.displayName = 'Toggle';
