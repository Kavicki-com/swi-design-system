import type { DescriptionVariant } from '../../utils/descriptionColor';
import type { GenderValue } from '../GenderSelectionCard';

export interface GenderSelectorProps {
  /** Currently selected gender, or `null` if nothing is selected yet. */
  value: GenderValue | null;
  onChange: (value: GenderValue) => void;
  /**
   * Legenda do grupo. Sem ela um seletor obrigatório em branco não tinha como
   * dizer que faltava escolher (QA Mobile #1, etapa 3 do cadastro).
   */
  description?: string;
  descriptionVariant?: DescriptionVariant;
  /** Custom labels for each card. Defaults match Figma. */
  femaleLabel?: string;
  maleLabel?: string;
  testID?: string;
}
