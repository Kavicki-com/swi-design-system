import { View } from 'react-native';
import styled from 'styled-components/native';
import { typography } from '../../tokens';
import {
  descriptionColor,
  type DescriptionVariant,
} from '../../utils/descriptionColor';

export interface DescriptionProps {
  $disabled: boolean;
  $variant?: DescriptionVariant;
}

// Mesmo empilhamento do Input/Combobox (label, controle, legenda) pra que um
// RadioGroup no meio de um formulario alinhe com os campos vizinhos.
export const Container = styled(View)`
  flex-direction: column;
  align-self: stretch;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const Label = styled.Text<{ $disabled: boolean }>`
  font-family: ${typography.label.m.fontFamily};
  font-weight: ${typography.label.m.fontWeight};
  font-size: ${typography.label.m.fontSize}px;
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.content.disable : theme.content.dark};
`;

// wrap: em tela estreita (ou com fonte ampliada) as opcoes quebram em vez de
// serem cortadas na borda.
export const Options = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gap.m}px;
`;

export const Description = styled.Text<DescriptionProps>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${(props) => descriptionColor(props)};
`;
