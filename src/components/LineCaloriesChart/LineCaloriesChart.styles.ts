import { View } from 'react-native';
import styled from 'styled-components/native';

// ChartFrame SEM overflow:hidden — os CaloriesTag das pontas renderem
// centralizados sobre o data point e overflowam metade fora do edge do
// frame. Com overflow:hidden, ficavam clipados invisíveis. BorderRadius
// continua redondinho no bg do View sem precisar de overflow.
// radius.m (8px) alinhado com Figma 342:10223 (era radius.l).
export const ChartFrame = styled(View)`
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.medium};
`;

export const Layer = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const KcalAnchor = styled(View)`
  position: absolute;
  width: 0;
  align-items: center;
`;

export const TimeAnchor = styled(View)`
  position: absolute;
  width: 0;
  align-items: center;
`;
