import type { IconName } from '../../icons';
import type { Theme } from '../../tokens';
import type {
  AttachmentAction,
  AttachmentActionLabels,
  AttachmentItem,
  AttachmentKind,
} from './AttachmentList.types';

const ACTION_ORDER: ReadonlyArray<AttachmentAction> = ['view', 'download', 'remove'];

export const DEFAULT_ACTION_LABELS: AttachmentActionLabels = {
  view: 'Visualizar',
  download: 'Baixar',
  remove: 'Excluir',
};

/** Olho, download e a lixeira com X do Modal de exclusão do Figma. */
export const ACTION_ICON: Record<AttachmentAction, IconName> = {
  view: 'visibility',
  download: 'download',
  remove: 'delete_forever',
};

/**
 * Botões de uma linha: as ações que a lista oferece (tem handler) e que o
 * item aceita, sempre na ordem visualizar, baixar, excluir, para o mesmo
 * botão cair no mesmo lugar em todas as linhas.
 */
export function visibleActions(
  item: Pick<AttachmentItem, 'actions'>,
  offered: Partial<Record<AttachmentAction, unknown>>,
): AttachmentAction[] {
  return ACTION_ORDER.filter(
    (action) => Boolean(offered[action]) && (!item.actions || item.actions.includes(action)),
  );
}

/** "Excluir exame.pdf": o botão só tem ícone, o leitor de tela ouve a ação e o arquivo. */
export function actionAccessibilityLabel(
  action: AttachmentAction,
  name: string,
  labels: AttachmentActionLabels,
): string {
  return `${labels[action]} ${name}`;
}

/**
 * Ícone da miniatura quando não há imagem para mostrar. Vídeo e áudio têm o
 * glifo do tipo, para o leitor bater o olho e saber o que vai abrir; documento
 * e imagem sem miniatura ficam no clipe de sempre.
 */
export function thumbIcon(kind: AttachmentKind): IconName {
  if (kind === 'video') return 'videocam';
  if (kind === 'audio') return 'audio_file';
  return 'attach_file';
}

/** Excluir em surface.error; visualizar e baixar no verde do baixar do exame compacto. */
export function actionBackground(
  action: AttachmentAction,
  theme: Pick<Theme, 'surface'>,
): string {
  return action === 'remove' ? theme.surface.error : theme.surface.primary;
}
