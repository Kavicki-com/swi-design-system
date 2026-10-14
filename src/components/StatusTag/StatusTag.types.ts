export type StatusTagStatus = 'canceled' | 'pending' | 'accept' | 'info';

export interface StatusTagProps {
  status?: StatusTagStatus;
  label?: string;
  fullWidth?: boolean;
  /**
   * Maximo de linhas do texto antes de truncar com reticencias. Padrao 1 (selo
   * compacto de uma linha). Passe um valor maior quando o rotulo for uma frase
   * de largura cheia que precisa quebrar sem cortar, como a confirmacao
   * "Presenca confirmada no ponto de encontro" da evacuacao no app.
   */
  numberOfLines?: number;
  accessibilityLabel?: string;
  testID?: string;
}
