import type { MapControlResult } from './MapControl.types';

// Lista abaixo da busca: só com texto digitado. O filtro é de quem usa (ele
// sabe o que casa com o texto); aqui só se decide se a lista aparece. Texto
// igual ao único resultado quer dizer que ele já foi escolhido. `dismissedFor`
// é o texto que estava na busca quando a lista foi fechada (Esc ou clique
// fora): com o mesmo texto ela fica fechada, e digitar outro a reabre.
export function resultsToShow(
  results: readonly MapControlResult[] | undefined,
  searchValue: string | undefined,
  dismissedFor?: string | null,
): readonly MapControlResult[] | null {
  const text = (searchValue ?? '').trim();
  if (!results || !text) return null;
  if (dismissedFor != null && dismissedFor === searchValue) return null;
  if (results.length === 1 && results[0]!.label === text) return null;
  return results;
}
