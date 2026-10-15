export type MediaKind = 'video' | 'audio';

export interface MediaPlayerProps {
  kind: MediaKind;
  /** URL do arquivo (no SWI, a URL assinada do anexo). */
  uri: string;
  /** Nome do anexo, acima do player e no rótulo de acessibilidade. */
  title: string;
  /**
   * Só no nativo: o app não tem player embutido, então o botão entrega ao
   * host a abertura (ex.: navegador interno). Sem ele, o botão não aparece.
   */
  onOpenExternal?: () => void;
  /** Rótulo do botão do nativo. Padrão "Reproduzir". */
  openLabel?: string;
  /** Frase no lugar do player quando o navegador não reproduz o arquivo. */
  errorLabel?: string;
  testID?: string;
}
