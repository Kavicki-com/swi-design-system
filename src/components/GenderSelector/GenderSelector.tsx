import React from 'react';
import { GenderSelectionCard } from '../GenderSelectionCard';
import { Row } from './GenderSelector.styles';
import type { GenderSelectorProps } from './GenderSelector.types';

export const GenderSelector = ({
  value,
  onChange,
  femaleLabel = 'Feminino',
  maleLabel = 'Masculino',
  testID,
}: GenderSelectorProps) => (
  <Row testID={testID} accessibilityRole="radiogroup">
    <GenderSelectionCard
      gender="female"
      label={femaleLabel}
      selected={value === 'female'}
      onPress={() => onChange('female')}
    />
    <GenderSelectionCard
      gender="male"
      label={maleLabel}
      selected={value === 'male'}
      onPress={() => onChange('male')}
    />
  </Row>
);

GenderSelector.displayName = 'GenderSelector';
