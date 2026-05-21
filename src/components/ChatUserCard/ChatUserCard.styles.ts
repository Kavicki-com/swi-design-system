import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import { typography } from '../../tokens';

export const Container = styled(Pressable)`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: ${({ theme }) => theme.surface.standard};
`;

export const AvatarRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  flex: 1;
  min-width: 0;
`;

export const TextStack = styled(View)`
  flex: 1;
  min-width: 0;
`;

// Name triplet: body + bold + sm (Inter 700/12) references `typography.badge.s`
// added in v0.1.80. Emission identical to the previous hardcoded version.
export const Name = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${typography.badge.s.fontFamily};
  font-size: ${typography.badge.s.fontSize}px;
  font-weight: ${typography.badge.s.fontWeight};
`;

// Subtitle stays on theme tokens — Inter 500/12 is not a named typography
// variant (intentionally outside the label/badge matrix).
export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Badge = styled(View)`
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.surface.error};
`;

// Unread counter: body + bold + sm (Inter 700/12) references `typography.badge.s`.
export const BadgeText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${typography.badge.s.fontFamily};
  font-size: ${typography.badge.s.fontSize}px;
  font-weight: ${typography.badge.s.fontWeight};
`;
