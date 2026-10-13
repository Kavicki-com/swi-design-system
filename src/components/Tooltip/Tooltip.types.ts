import type { ReactNode } from 'react';

export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** Texto do balao. Vazio ou `disabled` nao mostra nada. */
  label: string;
  /** O gatilho. O balao aparece no hover (so web; no touch nao ha hover). */
  children: ReactNode;
  /** Lado do gatilho onde o balao aparece. Padrao `top`. */
  side?: TooltipSide;
  /** Respiro entre o gatilho e o balao. Padrao 6. */
  gap?: number;
  /** Desliga o balao sem tirar o gatilho. */
  disabled?: boolean;
  testID?: string;
}
