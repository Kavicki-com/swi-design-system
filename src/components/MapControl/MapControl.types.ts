import type { TooltipSide } from '../Tooltip/Tooltip.types';

export type MapControlVariant = 'operators' | 'heatmap' | 'cameras';

export interface MapControlOption {
  id: string;
  label: string;
  checked: boolean;
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
