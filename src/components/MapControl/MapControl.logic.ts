import type { MapControlResult } from './MapControl.types';

// Lista abaixo da busca: só com texto digitado. O filtro é de quem usa (ele
// sabe o que casa com o texto); aqui só se decide se a lista aparece. Texto
// igual ao único resultado quer dizer que ele já foi escolhido.
export function resultsToShow(
  results: readonly MapControlResult[] | undefined,
  searchValue: string | undefined,
): readonly MapControlResult[] | null {
  const text = (searchValue ?? '').trim();
  if (!results || !text) return null;
  if (results.length === 1 && results[0]!.label === text) return null;
  return results;
}
