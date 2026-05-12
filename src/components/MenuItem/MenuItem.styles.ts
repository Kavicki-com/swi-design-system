import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';
import type { MenuItemVariant } from './MenuItem.types';

export interface StateProps {
  $active: boolean;
  $hovered: boolean;
  $disabled: boolean;
  $variant?: MenuItemVariant;
}

const containerBackground = ({
  $active,
  $hovered,
  $disabled,
  $variant,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  // Compact: transparent at all states (active is signalled by left bar + text color only).
  if ($variant === 'compact') return 'transparent';
  // Minimal: 60×60 square card on theme.background, no per-state bg swap — active is
  // signalled by icon color only (Figma node 165:21149 map-side-menu).
  if ($variant === 'minimal') return theme.background;
  if ($disabled) return theme.surface.disable;
  if ($active) return theme.surface.standard;
  if ($hovered) return theme.surface.standard;
  return theme.background;
};

const accentColor = ({
  $active,
  $hovered,
  $disabled,
  $variant,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  if ($disabled) return theme.content.disable;
  // Minimal: active item shows the icon in `content.dark` (light/whitish), inactive
  // stays `content.medium` (gray). No green primary — Figma 165:21149 uses contrast,
  // not color, to denote the active map-screen.
  if ($variant === 'minimal') {
    return $active ? theme.content.dark : theme.content.medium;
  }
  if ($active) return theme.content.primary;
  if ($hovered) return theme.content.dark;
  return theme.content.medium;
};

const dividerColor = ({
  $active,
  $hovered,
  $disabled,
  $variant,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  // Compact: only the active item shows the bar; otherwise transparent (keeps layout stable).
  if ($variant === 'compact') {
    return $active ? theme.content.primary : 'transparent';
  }
  return accentColor({ $active, $hovered, $disabled, $variant, theme });
};

/* Container dimensions per variant:
   default: 64px tall, full-width (224px non-fullWidth), left-aligned content.
   compact: 44px tall, narrow, left-aligned with divider bar at left edge.
   minimal: 60px tall, square (fullWidth in narrow parent), centered icon-only,
            padding 8 all sides, border-radius 8 — Figma 165:21149 map-side-menu. */
export const Container = styled(Pressable)<StateProps>`
  height: ${({ $variant }) =>
    $variant === 'compact' ? '44px' : $variant === 'minimal' ? '60px' : '64px'};
  flex-direction: row;
  align-items: center;
  justify-content: ${({ $variant }) =>
    $variant === 'compact'
      ? 'flex-start'
      : $variant === 'minimal'
        ? 'center'
        : 'space-between'};
  gap: ${({ $variant, theme }) => ($variant === 'compact' ? `${theme.gap.s}px` : '0px')};
  padding-left: ${({ $variant, theme }) =>
    $variant === 'compact'
      ? `${theme.padding.s}px`
      : $variant === 'minimal'
        ? `${theme.padding.s}px`
        : `${theme.padding.m}px`};
  padding-right: ${({ theme }) => theme.padding.s}px;
  padding-vertical: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ $variant, theme }) =>
    $variant === 'compact' ? '0px' : `${theme.border.radius.m}px`};
  background-color: ${(props) => containerBackground(props)};
`;

export const HoverOverlay = styled(View)<Pick<StateProps, '$variant'>>`
  position: absolute;
  inset: 0;
  border-radius: ${({ $variant, theme }) =>
    $variant === 'compact' ? '0px' : `${theme.border.radius.m}px`};
  background-color: ${({ theme }) => theme.surface.hover};
  pointer-events: none;
`;

export const LabelGroup = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const IconSlot = styled(View)`
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<StateProps>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ $variant, theme }) =>
    $variant === 'compact' ? `${theme.fontSize.s}px` : `${theme.fontSize.m}px`};
  color: ${(props) => accentColor(props)};
  text-transform: ${({ $variant }) => ($variant === 'compact' ? 'uppercase' : 'none')};
  letter-spacing: ${({ $variant }) => ($variant === 'compact' ? '0.6px' : 'normal')};
`;

export const Divider = styled(View)<StateProps>`
  width: 2px;
  height: 100%;
  border-radius: 2px;
  background-color: ${(props) => dividerColor(props)};
`;

/* Badge — red pill (28×28) for unread counts (alerts, reports, messages).
   - `overlay` (default): top:0 left:0 INSIDE the item — chip overlaps the
     icon's top-left corner.
   - `outside-left`: top:0 left:-14 — chip half-overlaps the item's left
     edge, popping out to the left of the icon column (Figma 165:21150
     map-side-menu pattern). */
export const BadgeOverlay = styled(View)<{ $position?: 'overlay' | 'outside-left' }>`
  position: absolute;
  top: 0;
  left: ${({ $position }) => ($position === 'outside-left' ? '-14px' : '0')};
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  background-color: ${({ theme }) => theme.surface.error};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.s}px;
  z-index: 2;
`;

export const BadgeText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 12px;
  color: ${({ theme }) => theme.content.dark};
`;
