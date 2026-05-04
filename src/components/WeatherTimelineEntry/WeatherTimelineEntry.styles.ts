import { View } from 'react-native';
import styled from 'styled-components/native';

export const Stack = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const IconRow = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  height: 64px;
`;
