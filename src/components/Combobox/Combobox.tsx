import React, { forwardRef, useState } from 'react';
import { ScrollView, type View } from 'react-native';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import {
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

// Altura estimada por OptionRow: padding-vertical 10×2 + OptionLabel (fontSize.m
// ≈14, line-height ~1.4) ≈ 44px. Buffer de 6px (gap.xs entre rows + border-top
// 1px) → 50px por linha. maxHeight = 50 × maxVisibleRows.
const OPTION_ROW_HEIGHT_ESTIMATE = 50;

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
      maxVisibleRows,
    },
    ref,
  ) => {
    const theme = useTheme();
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
      <Container ref={ref} testID={testID} $open={isOpen && !disabled}>
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
          <Icon
            name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            size={20}
            color={disabled ? theme.content.disable : theme.content.dark}
          />
        </Trigger>
        {isOpen && !disabled ? (
          <Panel accessibilityRole="menu">
            {(() => {
              const optionsList = (
                <OptionsList>
                  {options.map((option, idx) => (
                    <OptionRow
                      key={option.value}
                      $first={idx === 0}
                      $hovered={hoveredOption === option.value}
                      onPress={() => handleSelect(option.value)}
                      onHoverIn={() => setHoveredOption(option.value)}
                      onHoverOut={() =>
                        setHoveredOption((current) => (current === option.value ? null : current))
                      }
                      accessibilityRole="menuitem"
                      accessibilityState={{ selected: option.value === value }}
                    >
                      <OptionLabel>{option.label}</OptionLabel>
                    </OptionRow>
                  ))}
                </OptionsList>
              );

              // Scroll só se houver cap E mais opções que o cap. Caso contrário
              // render plano (sem ScrollView extra) preserva touch nativo.
              if (maxVisibleRows && options.length > maxVisibleRows) {
                return (
                  <ScrollView
                    style={{ maxHeight: OPTION_ROW_HEIGHT_ESTIMATE * maxVisibleRows }}
                    showsVerticalScrollIndicator
                    nestedScrollEnabled
                    keyboardShouldPersistTaps="handled"
                  >
                    {optionsList}
                  </ScrollView>
                );
              }
              return optionsList;
            })()}
          </Panel>
        ) : null}
        {description ? <Description $disabled={disabled}>{description}</Description> : null}
      </Container>
    );
  },
);

Combobox.displayName = 'Combobox';
