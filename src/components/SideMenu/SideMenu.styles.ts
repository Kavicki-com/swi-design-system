import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }) => theme.gap.s}px;
`;
