import { View } from 'react-native';
import styled from 'styled-components/native';

export const ChartFrame = styled(View)`
  border-radius: ${({ theme }) => theme.border.radius.l}px;
  overflow: hidden;
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
