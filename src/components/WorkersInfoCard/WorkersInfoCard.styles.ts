import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(View)`
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }) => theme.gap.m}px;
  padding-horizontal: ${({ theme }) => theme.padding.m}px;
  padding-top: ${({ theme }) => theme.padding.s}px;
  padding-bottom: ${({ theme }) => theme.padding.l}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
`;

export const HeaderRow = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfoCluster = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xxl}px;
`;

export const UserData = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const UserText = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gap.xs}px;
  width: 145px;
`;

export const NameAge = styled(View)`
  flex-direction: column;
`;

export const NameText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const AgeText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const BloodRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const BloodText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.ms}px;
`;

export const VerticalDivider = styled(View)`
  width: 1px;
  height: 56px;
  background-color: ${({ theme }) => theme.content.medium};
`;

export const HorizontalDivider = styled(View)`
  height: 1px;
  align-self: stretch;
  background-color: ${({ theme }) => theme.content.medium};
`;

export const RoleStack = styled(View)`
  flex-direction: column;
  width: 186px;
`;

export const RolePrimary = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const RoleSecondary = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const ActionsRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const IconButton = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.high};
`;

export const ChevronWrap = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${({ theme }) => theme.padding.xs}px;
  padding-vertical: ${({ theme }) => theme.padding.sm}px;
`;

export const ExpandedRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 51px;
`;

export const AlertsList = styled(View)`
  flex: 1;
  min-width: 0;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.sm}px;
`;

export const AlertItem = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  align-self: stretch;
`;

export const AlertContent = styled(View)`
  flex: 1;
  min-width: 0;
  flex-direction: column;
  gap: 5px;
`;

export const AlertTitle = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.ms}px;
`;

export const AlertBody = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const ActionsColumn = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gap.sm}px;
  width: 280px;
`;

export const PauseButton = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.accent};
  align-self: stretch;
`;

export const PauseButtonLabel = styled.Text`
  color: ${({ theme }) => theme.content.light};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;
