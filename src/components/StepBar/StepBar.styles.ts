import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  align-self: stretch;
`;

// Connector segment between two step dots. Figma 213:13397 renders a 4px-thick
// rounded line: solid gray for "not reached" and a linear gradient
// (#8AD2E2 → #62BB81, light-blue to primary green) for "reached". The gradient
// version lives in StepBar.tsx via SvgGradientConnector — this styled View
// covers the solid (gray, not-reached) case and provides geometry for both.
export const Connector = styled(View)<{ $reached: boolean }>`
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ $reached, theme }) =>
    $reached ? theme.content.primary : theme.content.medium};
`;

// Track for the gradient connector — same geometry as Connector but transparent
// so the SVG fill renders cleanly inside it.
export const GradientTrack = styled(View)`
  flex: 1;
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
`;
