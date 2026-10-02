import type { IconName } from '../../icons';

export interface HeaderUserInfoProps {
  /** Batimento; null mostra "--" no lugar do numero (sem leitura). */
  bpm: number | null;
  /** Pressao ja formatada; null mostra "--" (sem medicao). */
  pressure: string | null;
  /** Preenchimento da barra; null deixa a barra vazia. */
  progress?: number | null;
  avatarUri?: string;
  bpmUnit?: string;
  accessibilityLabel?: string;
  testID?: string;
  heartIconName?: IconName;
  pressureIconName?: IconName;
  bordered?: boolean;
  borderColor?: string;
}
