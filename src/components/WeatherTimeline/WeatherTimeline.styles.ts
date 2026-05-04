import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const EventsRow = styled(View)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const EventColumn = styled(View)`
  flex: 1;
  align-items: flex-start;
  position: relative;
`;

export const EventColumnCentered = styled(View)`
  flex: 1;
  align-items: center;
  position: relative;
`;

export const NowFloat = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 2;
`;

export const IntensityRow = styled(View)`
  flex-direction: row;
  height: 8px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  overflow: hidden;
  align-self: stretch;
`;

export const IntensitySegmentView = styled(View)<{ $flex: number; $bg: string }>`
  flex: ${({ $flex }) => $flex};
  background-color: ${({ $bg }) => $bg};
`;
