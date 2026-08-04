import React from 'react';
import { GenderSelectionCard } from '../GenderSelectionCard';
import { Container, Description, Row } from './GenderSelector.styles';
import type { GenderSelectorProps } from './GenderSelector.types';

export const GenderSelector = ({
  value,
  onChange,
  femaleLabel = 'Feminino',
  maleLabel = 'Masculino',
  description,
  descriptionVariant = 'default',
  testID,
}: GenderSelectorProps) => (
  // O papel de grupo sobe pro Container junto com a legenda: assim o leitor de
  // tela lê a mensagem ("Selecione uma opção") como parte do mesmo grupo das
  // cards, e não como um texto solto depois delas.
  <Container testID={testID} accessibilityRole="radiogroup">
    <Row>
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

    {description ? (
      <Description $variant={descriptionVariant}>{description}</Description>
    ) : null}
  </Container>
);

GenderSelector.displayName = 'GenderSelector';
