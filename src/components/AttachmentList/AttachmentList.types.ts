/**
 * Imagem mostra a miniatura; arquivo (ex.: PDF de exame) mostra o clipe;
 * vídeo e áudio (anexo de relatório) mostram o ícone do tipo.
 */
export type AttachmentKind = 'image' | 'file' | 'video' | 'audio';

/** Botões da linha, sempre nesta ordem: visualizar, baixar, excluir. */
export type AttachmentAction = 'view' | 'download' | 'remove';

export interface AttachmentItem {
  /** Identidade estável da linha (chave e testID). */
  id: string;
  /** Nome do arquivo, em uma linha, cortado no fim. */
  name: string;
  kind: AttachmentKind;
  /** Miniatura de uma imagem. Sem ela, a linha mostra o clipe. */
  thumbnailUri?: string;
  /**
   * Ações que este item aceita. Ausente, valem todas as que a lista oferece.
   * Ex.: um arquivo que ainda não foi enviado não tem o que baixar.
   */
  actions?: ReadonlyArray<AttachmentAction>;
}

export interface AttachmentActionLabels {
  view: string;
  download: string;
  remove: string;
}

export interface AttachmentListProps {
  items: ReadonlyArray<AttachmentItem>;
  /** Sem o handler, o botão some de todas as linhas. */
  onView?: (item: AttachmentItem) => void;
  onDownload?: (item: AttachmentItem) => void;
  onRemove?: (item: AttachmentItem) => void;
  /** Itens com ação em andamento (ex.: excluindo): os botões da linha ficam desabilitados. */
  busyIds?: ReadonlyArray<string>;
  /** Verbos dos rótulos de acessibilidade. Padrão Visualizar, Baixar, Excluir. */
  actionLabels?: Partial<AttachmentActionLabels>;
  /** Frase quando não há item. Sem ela, a lista vazia não desenha nada. */
  emptyLabel?: string;
  /** Rótulo da lista. Padrão "Anexos". */
  accessibilityLabel?: string;
  testID?: string;
}
