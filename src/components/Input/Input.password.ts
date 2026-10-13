// Olho de visibilidade da senha: nome do icone e rotulo acessivel a partir do
// estado atual. O rotulo descreve a ACAO (mostrar/ocultar), nao o estado.

/** Icone do olho: revelar quando oculto, ocultar quando visivel. */
export const passwordEyeIcon = (visible: boolean): 'visibility' | 'visibility_off' =>
  visible ? 'visibility_off' : 'visibility';

/** Rotulo acessivel do olho, descrevendo a acao do toque. */
export const passwordEyeLabel = (visible: boolean): string =>
  visible ? 'Ocultar senha' : 'Mostrar senha';
