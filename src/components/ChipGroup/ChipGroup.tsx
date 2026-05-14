import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Chip } from '../Chip';
import type { ChipGroupProps } from './ChipGroup.types';

const toArray = (val: string | string[] | undefined): string[] => {
  if (val === undefined) return [];
  return Array.isArray(val) ? val : [val];
};

export const ChipGroup = ({
  options,
  mode = 'single',
  maxSelections,
  initialValue,
  value,
  onChange,
  variant,
  colorScheme,
  style,
}: ChipGroupProps) => {
  const [selected, setSelected] = useState<string[]>(
    toArray(value !== undefined ? value : initialValue),
  );

  useEffect(() => {
    if (value !== undefined) setSelected(toArray(value));
  }, [value]);

  const handlePress = (option: string) => {
    let next = [...selected];
    if (mode === 'single') {
      next = next.includes(option) ? [] : [option];
    } else if (next.includes(option)) {
      next = next.filter((item) => item !== option);
    } else if (!maxSelections || next.length < maxSelections) {
      next.push(option);
    }

    if (value === undefined) setSelected(next);
    onChange?.(mode === 'single' ? next[0] ?? '' : next);
  };

  return (
    <View style={[{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, style]}>
      {options.map((option) => (
        <Chip
          key={option}
          label={option}
          variant={variant}
          colorScheme={colorScheme}
          state={selected.includes(option) ? 'active' : 'default'}
          onPress={() => handlePress(option)}
        />
      ))}
    </View>
  );
};
