import React, { forwardRef, useState } from 'react';
import { type View } from 'react-native';
import {
  Chevron,
  Container,
  Description,
  Label,
  OptionLabel,
  OptionRow,
  OptionsList,
  Panel,
  Trigger,
  TriggerLabel,
} from './Combobox.styles';
import type { ComboboxProps } from './Combobox.types';

export const Combobox = forwardRef<View, ComboboxProps>(
  (
    {
      label,
      description,
      placeholder = 'Select…',
      options,
      value,
      onChange,
      open,
      onOpenChange,
      disabled = false,
      accessibilityLabel,
      accessibilityHint,
      testID,
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = open ?? internalOpen;
    const setOpen = (next: boolean) => {
      if (open === undefined) setInternalOpen(next);
      onOpenChange?.(next);
    };

    const [hovered, setHovered] = useState(false);
    const [hoveredOption, setHoveredOption] = useState<string | null>(null);

    const selected = options.find((o) => o.value === value);
    const displayText = selected?.label ?? placeholder;
    const isPlaceholder = !selected;

    const handleSelect = (next: string) => {
      onChange?.(next);
      setOpen(false);
    };

    return (
      <Container ref={ref} testID={testID}>
        {label ? <Label $disabled={disabled}>{label}</Label> : null}
        <Trigger
          $focused={isOpen}
          $hovered={hovered}
          $disabled={disabled}
          disabled={disabled}
          onPress={() => !disabled && setOpen(!isOpen)}
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          accessibilityRole="button"
          accessibilityState={{ disabled, expanded: isOpen }}
          accessibilityLabel={accessibilityLabel ?? label}
          accessibilityHint={accessibilityHint}
        >
          <TriggerLabel $placeholder={isPlaceholder} $disabled={disabled} numberOfLines={1}>
            {displayText}
          </TriggerLabel>
          <Chevron $disabled={disabled}>{isOpen ? '▴' : '▾'}</Chevron>
        </Trigger>
        {isOpen && !disabled ? (
          <Panel accessibilityRole="menu">
            <OptionsList>
              {options.map((option, idx) => (
                <OptionRow
                  key={option.value}
                  $first={idx === 0}
                  $hovered={hoveredOption === option.value}
                  onPress={() => handleSelect(option.value)}
                  onHoverIn={() => setHoveredOption(option.value)}
                  onHoverOut={() => setHoveredOption((current) => (current === option.value ? null : current))}
                  accessibilityRole="menuitem"
                  accessibilityState={{ selected: option.value === value }}
                >
                  <OptionLabel>{option.label}</OptionLabel>
                </OptionRow>
              ))}
            </OptionsList>
          </Panel>
        ) : null}
        {description ? <Description $disabled={disabled}>{description}</Description> : null}
      </Container>
    );
  },
);

Combobox.displayName = 'Combobox';
