import { View } from 'react-native';
import styled from 'styled-components/native';

/* gap.l (24px) leaves room for the WeatherTimeline ruler to sit between the
   IconRow (64px tall) and the WeatherEventChip+label below — matches Figma
   frame 48:3046 (chip at y=88, ruler at y=64-84). */
export const Stack = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gap.l}px;
`;

export const IconRow = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  height: 64px;
`;
