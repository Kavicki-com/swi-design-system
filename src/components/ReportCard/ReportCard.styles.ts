import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(Pressable)`
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: ${({ theme }) => theme.padding.m}px;
  border-radius: ${({ theme }) => theme.border.radius.l}px;
  background-color: ${({ theme }) => theme.surface.standard};
  overflow: hidden;
`;

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

export const SectionHeading = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;

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

export const AuthorName = styled.Text`
  flex: 1;
  min-width: 0;
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;

export const LocationLabel = styled.Text`
  color: ${({ theme }) => theme.content.secondary};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;
