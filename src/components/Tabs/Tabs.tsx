import React, { forwardRef, useCallback, useState } from 'react';
import { type View } from 'react-native';
import { Container, Tab, TabLabel } from './Tabs.styles';
import type { TabsProps } from './Tabs.types';

export const Tabs = forwardRef<View, TabsProps>(
  (
    {
      tabs,
      value: controlledValue,
      defaultValue,
      onChange,
      fullWidth = false,
      disabled = false,
      variant = 'segmented',
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const isControlled = controlledValue !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState<string | undefined>(
      defaultValue ?? tabs[0]?.value,
    );
    const value = isControlled ? controlledValue : uncontrolledValue;

    const handlePress = useCallback(
      (next: string) => {
        if (disabled) return;
        if (!isControlled) setUncontrolledValue(next);
        onChange?.(next);
      },
      [disabled, isControlled, onChange],
    );

    return (
      <Container
        ref={ref}
        $separated={variant === 'separated'}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start' }
        }
        accessibilityRole="tablist"
        accessibilityLabel={accessibilityLabel}
        testID={testID}
      >
        {tabs.map((tab, idx) => {
          const isActive = tab.value === value;
          const isDisabled = disabled || !!tab.disabled;
          return (
            <Tab
              key={tab.value}
              $active={isActive}
              $first={idx === 0}
              $last={idx === tabs.length - 1}
              $fullWidth={fullWidth}
              $disabled={isDisabled}
              $separated={variant === 'separated'}
              disabled={isDisabled}
              onPress={() => handlePress(tab.value)}
              accessibilityRole="tab"
              accessibilityLabel={tab.label}
              accessibilityState={{ selected: isActive, disabled: isDisabled }}
            >
              <TabLabel $active={isActive} numberOfLines={1}>
                {tab.label}
              </TabLabel>
            </Tab>
          );
        })}
      </Container>
    );
  },
);

Tabs.displayName = 'Tabs';
