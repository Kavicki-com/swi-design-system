import { View } from 'react-native';
import styled from 'styled-components/native';

/* Figma frame 21:1478 — flag-on-pole marker.
   Layout: pole on the LEFT (3px-wide vertical line, full marker height),
   flag pill attached to the right of the pole's TOP, rounded only on the right
   side. Total marker = pole height; flag overlays the top 30px. */
export const Stack = styled(View)`
  flex-direction: row;
  align-items: flex-start;
`;

/* Token naming convention: theme.content.dark = light color (#f5f5f5 — content
   for use ON dark surfaces), theme.content.light = dark color (#222 — content
   for use ON light surfaces). Figma 21:1478 specifies a LIGHT flag with DARK
   text, which means bg/pole use content.dark and text uses content.light. */
export const Pole = styled(View)<{ $height: number }>`
  width: 3px;
  height: ${({ $height }) => $height}px;
  background-color: ${({ theme }) => theme.content.dark};
`;

export const Flag = styled(View)`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.content.dark};
  align-items: center;
  justify-content: center;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const FlagText = styled.Text`
  color: ${({ theme }) => theme.content.light};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
