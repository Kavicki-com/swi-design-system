export type AvatarSize = 's' | 'm' | 'l';

export interface AvatarProps {
  uri?: string;
  /**
   * Nome da pessoa, usado para as iniciais quando não há `uri`. Sem ele o
   * fallback cai no `accessibilityLabel`; sem nenhum dos dois a moldura fica
   * vazia (comportamento anterior a 0.1.120).
   */
  name?: string;
  size?: AvatarSize;
  customSize?: number;
  bordered?: boolean;
  /**
   * Border thickness in px. Defaults to 2. Only applied when `bordered: true`.
   * Used by Dashboard avatar which Figma renders with ~4px ring.
   */
  borderWidth?: number;
  borderColor?: string;
  fallbackBackgroundColor?: string;
  testID?: string;
  accessibilityLabel?: string;
}
