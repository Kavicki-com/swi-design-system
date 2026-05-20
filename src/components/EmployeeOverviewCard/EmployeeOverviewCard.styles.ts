import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(Pressable)<{ $borderColor?: string }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${({ theme }) => theme.padding.m}px;
  padding-vertical: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
  ${({ $borderColor }) =>
    $borderColor ? `border-width: 1px; border-color: ${$borderColor};` : ''}
`;

export const LeftCluster = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.l}px;
  /* flex:1 so the cluster fills the card width minus the LocationButton.
   * Without this, LeftCluster is intrinsic-sized based on TextStack content;
   * variable-length names shift the divider/health-overview x-position
   * between cards, making lists look misaligned. */
  flex: 1;
  min-width: 0;
`;

export const UserInfo = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  /* flex:1 so UserInfo absorbs the LeftCluster's remaining space,
   * keeping divider + HealthOverview pinned to consistent x across cards. */
  flex: 1;
  min-width: 0;
`;

export const TextStack = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const Sector = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const ProgressSlot = styled(View)`
  width: 119px;
`;

export const Divider = styled(View)`
  width: 1px;
  align-self: stretch;
  background-color: ${({ theme }) => theme.content.medium};
`;

export const HealthOverview = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gap.s}px;
  /* 110px instead of Figma's 87px — Figma assumed 2-digit BPM ("65 Bpm"),
   * real data has 3-digit values ("138 Bpm") that don't fit at 87px and
   * wrap to a second line. 110px comfortably holds icon + "999 Bpm". */
  width: 110px;
`;

export const Stat = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.sm}px;
`;

export const StatText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  /* Safety net so values like "138 Bpm" stay on one line even if the
   * HealthOverview column is tighter than expected. Web-only. */
  white-space: nowrap;
`;

export const LocationButton = styled(Pressable)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
