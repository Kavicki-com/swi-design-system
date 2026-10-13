import React, { useState } from 'react';
import { elevation } from '../../tokens';
import { Anchor, Bubble, BubbleText } from './Tooltip.styles';
import { tooltipBubbleStyle } from './Tooltip.position';
import type { TooltipProps } from './Tooltip.types';

/**
 * Balao de dica no hover do gatilho.
 *
 * PLATAFORMA — hover so existe no ponteiro (web, inclusive react-native-web).
 * No touch nao ha hover, entao o balao nunca aparece no app; por isso o gatilho
 * deve carregar seu proprio `accessibilityLabel`, e o balao e so reforco visual
 * no desktop. O wrapper e uma View (nao Pressable) para nao aninhar um botao
 * dentro do botao do gatilho; o hover vem de onPointerEnter/onPointerLeave.
 */
export function Tooltip({
  label,
  children,
  side = 'top',
  gap = 6,
  disabled = false,
  fullWidth = false,
  testID,
}: TooltipProps) {
  const [hovered, setHovered] = useState(false);
  const show = hovered && !disabled && label.length > 0;

  return (
    <Anchor
      style={fullWidth ? { alignSelf: 'stretch', width: '100%' } : undefined}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      testID={testID}
    >
      {children}
      {show ? (
        <Bubble
          style={[tooltipBubbleStyle(side, gap), elevation.md]}
          pointerEvents="none"
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        >
          <BubbleText numberOfLines={1}>{label}</BubbleText>
        </Bubble>
      ) : null}
    </Anchor>
  );
}
