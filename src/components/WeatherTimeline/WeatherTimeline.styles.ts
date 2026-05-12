import { View } from 'react-native';
import styled from 'styled-components/native';

/* Figma frame 21:1476 weather-section: 1037x162 (timeline) + 8 (scrollbar) = 170 total.
   Layout: events flow normally; ruler floats at y=64 (between icons and chips);
   AGORA marker is positioned absolutely by percentage; scrollbar sits below the timeline. */
export const Container = styled(View)`
  flex-direction: column;
  position: relative;
`;

/* Ruler floats over the gap between the icon (y=0-64) and the chip+label (y=88+).
   absolute top:64 matches Figma frame 48:3046 inside weather-section. */
export const RulerRow = styled(View)`
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  height: 20px;
  z-index: 1;
`;

export const RulerLine = styled(View)<{ $major: boolean }>`
  width: 1px;
  height: ${({ $major }) => ($major ? 20 : 12)}px;
  background-color: ${({ theme }) => theme.content.dark};
  opacity: 0.4;
`;

export const EventsRow = styled(View)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

/* min-width is the natural overflow trigger: with N events that all fit (each
   >= 200px), no scroll. Once events squish below 200px (more events than the
   container can hold at full width), the row exceeds container width and the
   ScrollView begins to scroll. */
export const EventColumn = styled(View)`
  flex: 1;
  min-width: 200px;
  align-items: flex-start;
  position: relative;
`;

export const EventColumnCentered = styled(View)`
  flex: 1;
  align-items: center;
  position: relative;
`;

/* AGORA marker — positioned absolutely at the percentage supplied by nowAtPercent.
   top: 40px places the Flag in the lower half of the icon row (matches Figma frame
   21:1478 y=40). The pole sits at the LEFT edge of the marker, so `left: <pct>%`
   directly aligns the pole with the requested percentage point — no transform or
   centering trick needed (and styled-components/native couldn't parse those anyway). */
export const NowFloat = styled(View)`
  position: absolute;
  top: 40px;
  z-index: 2;
`;

export const IntensityRow = styled(View)`
  flex-direction: row;
  height: 12px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  overflow: hidden;
  align-self: stretch;
  margin-top: ${({ theme }) => theme.gap.s}px;
`;

export const IntensitySegmentView = styled(View)<{ $flex: number; $bg: string }>`
  flex: ${({ $flex }) => $flex};
  background-color: ${({ $bg }) => $bg};
`;

/* Scrollbar/scrubber under the timeline (Figma frame 21:1501).
   Track: full width, 8px tall, dark; Thumb: lighter, percentage-driven. */
export const ScrollTrack = styled(View)`
  height: 8px;
  border-radius: ${({ theme }) => theme.border.radius.l}px;
  background-color: ${({ theme }) => theme.surface.medium};
  margin-top: ${({ theme }) => theme.gap.m}px;
  flex-direction: row;
`;

export const ScrollThumb = styled(View)`
  height: 8px;
  border-radius: ${({ theme }) => theme.border.radius.l}px;
  background-color: ${({ theme }) => theme.surface.high};
`;
