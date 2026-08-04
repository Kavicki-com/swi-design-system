import { View } from 'react-native';
import styled from 'styled-components/native';
import {
  descriptionColor,
  type DescriptionVariant,
} from '../../utils/descriptionColor';

export interface DescriptionProps {
  $variant?: DescriptionVariant;
}

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  align-self: stretch;
`;

// Empilha Row + legenda. Só entra em cena quando há `description`: sem ela o
// componente segue renderizando exatamente o que renderizava antes.
export const Container = styled(View)`
  flex-direction: column;
  align-self: stretch;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const Description = styled.Text<DescriptionProps>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${(props) => descriptionColor(props)};
`;
