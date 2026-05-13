import { View } from 'react-native';
import styled from 'styled-components/native';

export const Frame = styled(View)<{
  $size: number;
  $bordered: boolean;
  $borderWidth: number;
  $borderColor: string;
  $bg: string;
}>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  overflow: hidden;
  background-color: ${({ $bg }) => $bg};
  ${({ $bordered, $borderWidth, $borderColor }) =>
    $bordered
      ? `border-width: ${$borderWidth}px; border-style: solid; border-color: ${$borderColor};`
      : ''};
`;
