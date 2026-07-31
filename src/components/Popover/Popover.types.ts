import type { ReactNode } from 'react';
import type { IconName } from '../../icons';
import type { PopoverAlign } from './Popover.placement';

export type { PopoverAlign };

export interface PopoverProps {
  /**
   * Visibilidade CONTROLADA pelo consumidor, de proposito. Uma lista de
   * mensagens tem um popover por bolha, e quem garante que so um fica aberto e
   * quem conhece a lista, nao cada popover isolado.
   */
  visible: boolean;
  /**
   * Chamado quando o popover deve fechar por conta propria: clique fora ou
   * Esc. NAO e chamado quando o proprio consumidor fecha.
   *
   * No nativo isso nao acontece: ver a nota de plataforma no Popover.tsx.
   */
  onDismiss: () => void;
  /** O gatilho, renderizado sempre. O painel ancora nele. */
  trigger: ReactNode;
  /**
   * Qual borda do gatilho alinha com a do painel. `start` fixa a esquerda,
   * `end` fixa a direita. Escolha pelo lado em que o gatilho mora: gatilho na
   * esquerda pede `start`, na direita pede `end`, e assim o painel cresce para
   * dentro do conteudo em vez de vazar para fora.
   */
  align?: PopoverAlign;
  /** Respiro entre gatilho e painel. Default 4. */
  gap?: number;
  /** Largura minima do painel. Default 176. */
  minWidth?: number;
  /**
   * Conteudo do painel. Tipicamente `PopoverItem`, mas aceita qualquer no: e o
   * que permite o painel trocar para uma confirmacao no mesmo lugar, em vez de
   * abrir uma segunda camada por cima.
   */
  children: ReactNode;
  accessibilityLabel?: string;
  testID?: string;
}

/**
 * `destructive` pinta o item com `content.error`. Existe porque uma acao que
 * apaga precisa ser lida como diferente ANTES do clique, nao depois.
 */
export type PopoverItemTone = 'default' | 'destructive';

export interface PopoverItemProps {
  label: string;
  icon?: IconName;
  tone?: PopoverItemTone;
  disabled?: boolean;
  onPress?: () => void;
  accessibilityLabel?: string;
  testID?: string;
}
