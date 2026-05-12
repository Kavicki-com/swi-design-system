import { View } from 'react-native';
import styled from 'styled-components/native';

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  align-self: stretch;
`;
