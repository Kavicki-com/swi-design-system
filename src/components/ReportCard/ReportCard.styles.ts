import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import { typography } from '../../tokens';

export const Card = styled(Pressable)`
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: ${({ theme }) => theme.padding.m}px;
  border-radius: ${({ theme }) => theme.border.radius.l}px;
  background-color: ${({ theme }) => theme.surface.standard};
  overflow: hidden;
`;

// Title stays on theme tokens — Montserrat 700/16 maps to title.xs, which is
// outside the label/badge cleanup scope of this Phase 5 series.
export const Title = styled.Text`
  align-self: stretch;
  color: ${({ theme }) => theme.content.primary};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.ms}px;
`;

export const Section = styled(View)`
  align-self: stretch;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

// SectionHeading triplet: body + bold + sm (Inter 700/12) references
// `typography.badge.s` added in v0.1.80.
export const SectionHeading = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${typography.badge.s.fontFamily};
  font-weight: ${typography.badge.s.fontWeight};
  font-size: ${typography.badge.s.fontSize}px;
`;

// SectionBody stays on theme tokens — Inter 400/14 is not a named variant.
export const SectionBody = styled.Text`
  align-self: stretch;
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const FooterRow = styled(View)`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AuthorBlock = styled(View)`
  flex: 1;
  min-width: 0;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const AuthorRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

// AuthorName: Inter 700/12 → `typography.badge.s`.
export const AuthorName = styled.Text`
  flex: 0 1 auto;
  max-width: 80px;
  color: ${({ theme }) => theme.content.dark};
  font-family: ${typography.badge.s.fontFamily};
  font-weight: ${typography.badge.s.fontWeight};
  font-size: ${typography.badge.s.fontSize}px;
`;

// LocationLabel: Inter 700/12 → `typography.badge.s` (color stays
// content.secondary — only triplet swapped to the named variant).
export const LocationLabel = styled.Text`
  color: ${({ theme }) => theme.content.secondary};
  font-family: ${typography.badge.s.fontFamily};
  font-weight: ${typography.badge.s.fontWeight};
  font-size: ${typography.badge.s.fontSize}px;
`;
