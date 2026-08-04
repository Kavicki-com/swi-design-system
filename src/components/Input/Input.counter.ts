// Logica do contador de caracteres do Input, extraida pra modulo puro porque
// o vitest do DS nao monta componente RN (sem transform) — ver
// Input.counter.test.ts pro contexto do QA Web #9.

/** Contador e opt-in E depende de um limite real pra fazer sentido. */
export function shouldShowCounter(
  counter: boolean | undefined,
  maxLength: number | undefined,
): boolean {
  return counter === true && typeof maxLength === 'number' && maxLength > 0;
}

/**
 * Comprimento atual: num Input controlado o `value` e a verdade (inclusive
 * string vazia, caso do reset de form); sem `value`, vale o comprimento
 * rastreado internamente via onChangeText.
 */
export function resolveLength(
  value: string | undefined,
  innerLength: number,
): number {
  return typeof value === 'string' ? value.length : innerLength;
}

/** Formato "usado/limite", ex. `128/240`. */
export function counterText(length: number, maxLength: number): string {
  return `${length}/${maxLength}`;
}
