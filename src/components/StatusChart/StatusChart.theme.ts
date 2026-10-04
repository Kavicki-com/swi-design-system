import type { DefaultTheme } from 'styled-components/native';
import type { HeartrateStatusCondition } from '../HeartrateStatus/HeartrateStatus.types';
import type { StatusChartCondition } from './StatusChart.types';

export interface StatusChartPalette {
  /** Top stop of the silhouette gradient. */
  gradientFrom: string;
  /** Bottom stop of the silhouette gradient. */
  gradientTo: string;
  /**
   * Stop do topo da barra de condição (o crescente). Em good, alert e low
   * repete `gradientFrom`: silhueta e barra andam juntas, como no Figma. Só a
   * `neutral` separa as duas, porque o cinza da silhueta some sobre o trilho.
   */
  barFrom: string;
  /** Stop da base da barra de condição. Mesma regra de `barFrom`. */
  barTo: string;
  /** Color of the heart-rate icon inside the action button. */
  accent: string;
  /** Tint applied to the dotted background grid. */
  backgroundTint: string;
  /**
   * Maps the chart condition to a heart-status badge condition. `null` quando
   * não há leitura pra julgar (`neutral`): o selo do peito não é desenhado.
   */
  heartStatus: HeartrateStatusCondition | null;
}

export const palette = (
  theme: DefaultTheme,
  condition: StatusChartCondition,
): StatusChartPalette => {
  switch (condition) {
    case 'alert':
      return {
        gradientFrom: theme.surface.error,
        gradientTo: theme.surface.errorLight,
        barFrom: theme.surface.error,
        barTo: theme.surface.errorLight,
        accent: theme.surface.error,
        backgroundTint: theme.surface.errorLight,
        heartStatus: 'alert',
      };
    case 'low':
      return {
        gradientFrom: theme.surface.info,
        gradientTo: theme.surface.infoLight,
        barFrom: theme.surface.info,
        barTo: theme.surface.infoLight,
        accent: theme.surface.info,
        backgroundTint: theme.surface.infoLight,
        heartStatus: 'low',
      };
    // Sem leitura: clone da good com as cores de estado trocadas por neutras
    // e sem selo. Não tem variante no Figma; nasceu pra o app parar de pintar
    // de verde (um falso "bom") quando não há dado.
    case 'neutral':
      return {
        gradientFrom: theme.surface.high,
        gradientTo: theme.surface.grey,
        barFrom: theme.content.medium,
        barTo: theme.content.medium,
        accent: theme.content.medium,
        backgroundTint: theme.surface.grey,
        heartStatus: null,
      };
    case 'good':
    default:
      return {
        gradientFrom: theme.surface.success,
        gradientTo: theme.surface.successLight,
        barFrom: theme.surface.success,
        barTo: theme.surface.successLight,
        accent: theme.surface.success,
        backgroundTint: theme.surface.successLight,
        heartStatus: 'check',
      };
  }
};

export const conditionLabel: Record<StatusChartCondition, string> = {
  good: 'good',
  alert: 'alert',
  low: 'low',
  neutral: 'neutral',
};
