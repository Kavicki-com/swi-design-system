import type { IconName } from '../../icons';
import type { MediaKind } from './MediaPlayer.types';

/** Os mesmos glifos da miniatura do AttachmentList, para o tipo ler igual nos dois. */
export const MEDIA_ICON: Record<MediaKind, IconName> = {
  video: 'videocam',
  audio: 'audio_file',
};

const KIND_LABEL: Record<MediaKind, string> = {
  video: 'Vídeo',
  audio: 'Áudio',
};

/** "Vídeo relato.mp4": o leitor de tela ouve o tipo antes do nome. */
export function mediaAccessibilityLabel(kind: MediaKind, title: string): string {
  return `${KIND_LABEL[kind]} ${title}`;
}

export const DEFAULT_OPEN_LABEL = 'Reproduzir';
export const DEFAULT_ERROR_LABEL = 'Não foi possível reproduzir este arquivo aqui. Use Baixar.';
