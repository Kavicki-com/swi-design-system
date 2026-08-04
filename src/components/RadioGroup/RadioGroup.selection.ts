/**
 * Uma opcao esta selecionada?
 *
 * Modulo separado porque o vitest do DS nao monta componente RN — o que da pra
 * testar de verdade sai daqui. A regra tem uma sutileza: "nada escolhido"
 * (`null` / `undefined`) nao pode casar com opcao nenhuma, nem com uma de
 * value vazio, senao o grupo abriria ja parecendo respondido.
 */
export const isSelected = (
  optionValue: string,
  current: string | null | undefined,
): boolean => {
  if (current === null || current === undefined) return false;
  if (optionValue === '') return false;
  return optionValue === current;
};
