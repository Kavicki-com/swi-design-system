import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  align-self: stretch;
`;

export const Connector = styled(View)<{ $reached: boolean }>`
  flex: 1;
  height: 1px;
  background-color: ${({ $reached, theme }) =>
    $reached ? theme.content.primary : theme.content.medium};
`;
