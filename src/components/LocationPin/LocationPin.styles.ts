import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  align-items: center;
  justify-content: flex-start;
`;

/* Overlap the tail slightly with the avatar so the triangle visually attaches
   to the bottom of the circle (mirrors Figma 32:2493 layout). */
export const TailWrapper = styled(View)`
  margin-top: -2px;
`;
