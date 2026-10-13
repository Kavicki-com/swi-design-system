import type { ReactNode } from 'react';

export interface CarouselProps {
  /** Itens do carrossel. Cada filho vira um slot de largura minima. */
  children: ReactNode;
  /** Largura minima de cada item, em px. Padrao 240. */
  itemMinWidth?: number;
  /** Respiro entre os itens. Padrao 12. */
  gap?: number;
  /** Rotulo do carrossel para o leitor de tela. */
  accessibilityLabel?: string;
  testID?: string;
}
