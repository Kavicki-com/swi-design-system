import { describe, expect, it } from 'vitest';
import { MISSING_READING, missingReadingLabel, readingProgress, readingText } from './reading';

// POR QUE ESTE MODULO NASCEU
//
// O painel passou a ler a telemetria real, e "sem leitura" virou estado de
// verdade: funcionario sem relogio, leitura velha, falha de rede. Os cartoes
// de vitais exigiam numero, entao a unica saida era escrever 0 bpm, que e uma
// mentira de saude. A regra do projeto e lacuna de DS virar bump, por isso a
// ausencia passa a ser aceita aqui, com um marcador unico para todos.

describe('readingText', () => {
  it('numero e texto aparecem exatamente como antes', () => {
    expect(readingText(65)).toBe('65');
    expect(readingText(0)).toBe('0');
    expect(readingText('120/80')).toBe('120/80');
  });

  it('ausencia vira o marcador, nunca zero', () => {
    expect(readingText(null)).toBe(MISSING_READING);
    expect(readingText(undefined)).toBe(MISSING_READING);
    expect(MISSING_READING).toBe('--');
  });
});

describe('readingProgress', () => {
  it('sem valor a barra fica vazia; com valor, o mesmo de antes', () => {
    expect(readingProgress(null)).toBe(0);
    expect(readingProgress(undefined)).toBe(0);
    expect(readingProgress(84)).toBe(84);
  });
});

describe('missingReadingLabel', () => {
  it('so existe quando falta alguma leitura, para nao mudar quem ja usa', () => {
    expect(missingReadingLabel('Ana', [65, '120/80'])).toBeUndefined();
  });

  it('diz "sem leitura" em vez de um numero', () => {
    expect(missingReadingLabel('Ana', [null, '120/80'])).toBe('Ana, sem leitura');
    expect(missingReadingLabel(undefined, [null])).toBe('Sem leitura');
  });
});
