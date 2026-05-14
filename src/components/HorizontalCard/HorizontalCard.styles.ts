import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

/**
 * Horizontal list-item card with a bold label and a chevron-right.
 * Used for the mobile Settings list (Figma 348:10615) — a primitive
 * the DS didn't ship before. Visually distinct from `MenuItem` (which
 * is a side-menu entry, no chevron, different padding/height rules).
 */
export const Container = styled(Pressable)<{ $disabled: boolean }>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.surface.standard};
  padding: ${({ theme }) => theme.padding.m}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  gap: ${({ theme }) => theme.gap.s}px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

export const LeftSlot = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const LabelSlot = styled(View)`
  flex: 1;
`;

export const RightSlot = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  /* padding.xs optically centres the narrow chevron (7.4×12) inside the 24×24 slot */
  padding: ${({ theme }) => theme.padding.xs}px;
`;
