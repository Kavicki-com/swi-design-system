import type { DescriptionVariant } from '../../utils/descriptionColor';
import type { RadioSize } from '../Radio';

export interface RadioGroupOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  /** Pergunta do grupo, ex. "Pessoa com deficiência?". */
  label?: string;
  options: RadioGroupOption[];
  /** `null` / `undefined` = nada escolhido ainda. */
  value?: string | null;
  onChange?: (value: string) => void;
  /**
   * Legenda do GRUPO. É aqui que mora a mensagem de obrigatório: o erro
   * pertence à pergunta, não a uma das opções.
   */
  description?: string;
  descriptionVariant?: DescriptionVariant;
  size?: RadioSize;
  disabled?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
