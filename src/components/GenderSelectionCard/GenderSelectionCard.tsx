import React from 'react';
import { useTheme } from '../../theme';
import { Icon } from '../Icon';
import { Container, IconSlot, Label } from './GenderSelectionCard.styles';
import type { GenderSelectionCardProps } from './GenderSelectionCard.types';

export const GenderSelectionCard = ({
  gender,
  label,
  selected,
  onPress,
  iconName,
  testID,
  accessibilityLabel,
}: GenderSelectionCardProps) => {
  const theme = useTheme();
  const resolvedIcon = iconName ?? gender;

  return (
    <Container
      $selected={selected}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      accessibilityLabel={accessibilityLabel ?? label}
      testID={testID}
    >
      <IconSlot>
        <Icon
          name={resolvedIcon}
          // Tamanho natural do SVG por gênero (Figma 211:13710):
          // female 11×17, male 16×16. IconSlot fica em 24×24 e centraliza.
          width={gender === 'female' ? 11 : 16}
          height={gender === 'female' ? 17 : 16}
          color={selected ? undefined : theme.content.medium}
          gradient={selected ? ['#62BB81', '#50B3D2'] : undefined}
        />
      </IconSlot>
      <Label $selected={selected}>{label}</Label>
    </Container>
  );
};

GenderSelectionCard.displayName = 'GenderSelectionCard';
