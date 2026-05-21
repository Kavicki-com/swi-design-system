import { View } from 'react-native';
import styled from 'styled-components/native';

// Pill bg = #171717 hardcoded — Figma 342:10223 (Calories Chart).
// FIXME: deveria virar token tipo theme.surface.dark — atualmente o
// darker token disponivel e surface.medium (#222), mas o callout precisa
// ser mais escuro pra contrastar com o chart bg (que JA usa #222).
// min-width:55 compensa o `width:0` no KcalAnchor parent (style trick
// pra ancorar centrado): sem isso o filho colapsa via constraint,
// quebrando text measure.
export const Pill = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.xs}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: #171717;
  min-width: 55px;
`;
