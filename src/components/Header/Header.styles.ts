import { View } from 'react-native';
import styled from 'styled-components/native';

export const Bar = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${({ theme }) => theme.padding.xl}px;
  padding-vertical: ${({ theme }) => theme.padding.sm}px;
`;
