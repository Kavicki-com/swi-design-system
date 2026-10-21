import { describe, expect, it } from 'vitest';
import { resultsToShow } from './MapControl.logic';

const ana = { id: 'w1', label: 'Ana Souza' };
const gabi = { id: 'w2', label: 'Gabriela Lima' };

describe('resultsToShow', () => {
  it('sem texto digitado não mostra lista', () => {
    expect(resultsToShow([ana, gabi], '')).toBeNull();
    expect(resultsToShow([ana, gabi], '   ')).toBeNull();
  });
  it('sem a prop results não mostra lista', () => {
    expect(resultsToShow(undefined, 'ana')).toBeNull();
  });
  it('com texto mostra os resultados recebidos, mesmo vazios', () => {
    expect(resultsToShow([ana], 'an')).toEqual([ana]);
    expect(resultsToShow([], 'zz')).toEqual([]);
  });
  it('texto igual ao único resultado fecha a lista (já escolhido)', () => {
    expect(resultsToShow([ana], 'Ana Souza')).toBeNull();
  });
});
