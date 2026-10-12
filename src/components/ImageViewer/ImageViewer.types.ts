export interface ImageViewerProps {
  visible: boolean;
  /** URL da imagem. `null` deixa o palco vazio (ex.: enquanto nada foi escolhido). */
  uri: string | null;
  /** Nome do arquivo, no topo do cartão e no rótulo de acessibilidade. */
  title: string;
  /** Fechar (X), Esc e clique fora. */
  onClose: () => void;
  /** Sem ele o botão Baixar não aparece. Baixar é do host: o DS não toca em arquivo. */
  onDownload?: () => void;
  /** Padrão "Baixar". */
  downloadLabel?: string;
  /** Rótulo do X e do fundo clicável. Padrão "Fechar". */
  closeAccessibilityLabel?: string;
  /** Frase no lugar da imagem quando ela não carrega. Padrão "Não foi possível abrir a imagem." */
  errorLabel?: string;
  testID?: string;
}
