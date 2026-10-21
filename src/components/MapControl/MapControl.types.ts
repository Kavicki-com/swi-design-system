import type { TooltipSide } from '../Tooltip/Tooltip.types';

export type MapControlVariant = 'operators' | 'heatmap' | 'cameras';

export interface MapControlOption {
  id: string;
  label: string;
  checked: boolean;
}

export interface MapControlResult {
  id: string;
  label: string;
  /** Linha secundária opcional (ex.: função do operador). */
  description?: string;
}

export interface MapControlProps {
  variant: MapControlVariant;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  title?: string;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (text: string) => void;
  options?: MapControlOption[];
  onOptionChange?: (id: string, checked: boolean) => void;
  /**
   * Resultados da busca (variantes `operators` e `cameras`), já filtrados por
   * quem usa. A lista aparece abaixo da barra só com texto digitado.
   */
  results?: MapControlResult[];
  /** Toque num resultado da lista. */
  onResultPress?: (id: string) => void;
  /** Texto da lista sem resultado. Padrão "Nenhum resultado". */
  emptyResultsText?: string;
  testID?: string;
  accessibilityLabel?: string;
  /**
   * Dica no hover do botao recolhido (so web). Sem valor, usa o titulo da
   * variante, para o icone sozinho sempre mostrar o nome da acao (MEL-05).
   */
  tooltip?: string;
  /** Lado do balao da dica. Padrao `left` (botoes na beira direita do mapa). */
  tooltipSide?: TooltipSide;
}
