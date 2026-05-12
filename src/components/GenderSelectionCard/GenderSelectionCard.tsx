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
          size={24}
          color={selected ? theme.content.dark : theme.content.medium}
        />
      </IconSlot>
      <Label $selected={selected}>{label}</Label>
    </Container>
  );
};

GenderSelectionCard.displayName = 'GenderSelectionCard';
