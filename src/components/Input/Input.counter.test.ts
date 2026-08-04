import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { counterText, resolveLength, shouldShowCounter } from './Input.counter';

// POR QUE ESTE CONTADOR NASCEU
//
// QA Web #9 pede "Denunciar" no menu da mensagem do chat com uma caixa de
// texto limitada a ~240 caracteres. O TextInput do RN ja corta no maxLength
// (a prop sempre passou pelo spread), mas cortar sem mostrar quanto falta e
// uma parede muda: o usuario digita, o campo para de aceitar e nada explica.
// A regra do projeto e lacuna de DS virar bump, nao contador improvisado na
// tela — dai a prop `counter` do Input.
//
// O DS nao tem transform de react-native no vitest, entao a logica sai num
// modulo puro e o render e validado no texto-fonte — mesma abordagem do
// RadioGroup.contract.test.ts e do ProgressBar.inset.test.ts.

describe('shouldShowCounter', () => {
  it('so aparece quando o consumidor pediu E ha limite', () => {
    expect(shouldShowCounter(true, 240)).toBe(true);
  });

  // Contador sem limite viraria "12/undefined"; limite sem pedido manteria o
  // comportamento atual de todo mundo que ja usa maxLength sem contador.
  it('nao aparece sem maxLength nem sem opt-in', () => {
    expect(shouldShowCounter(true, undefined)).toBe(false);
    expect(shouldShowCounter(undefined, 240)).toBe(false);
    expect(shouldShowCounter(false, 240)).toBe(false);
  });

  it('limite zero ou negativo nao ganha contador', () => {
    expect(shouldShowCounter(true, 0)).toBe(false);
    expect(shouldShowCounter(true, -1)).toBe(false);
  });
});

describe('resolveLength', () => {
  it('controlado: o value e a verdade, nao o estado interno', () => {
    expect(resolveLength('abc', 7)).toBe(3);
  });

  // String vazia E controlada — cair no fallback aqui mostraria a contagem
  // antiga depois de um reset de form (value='').
  it('string vazia controlada zera, nao cai no fallback', () => {
    expect(resolveLength('', 7)).toBe(0);
  });

  it('nao controlado: usa o comprimento rastreado internamente', () => {
    expect(resolveLength(undefined, 7)).toBe(7);
  });
});

describe('counterText', () => {
  it('formata como usado/limite', () => {
    expect(counterText(0, 240)).toBe('0/240');
    expect(counterText(240, 240)).toBe('240/240');
  });
});

describe('Input — decisoes do render que nao dao pra montar', () => {
  const tsx = readFileSync(join(__dirname, 'Input.tsx'), 'utf8');

  it('o contador vem do modulo puro, nao de template inline', () => {
    expect(tsx).toMatch(/shouldShowCounter\(/);
    expect(tsx).toMatch(/counterText\(/);
    expect(tsx).toMatch(/resolveLength\(/);
  });

  // Sem isto o contador de um Input NAO controlado congelaria em 0: o RN nao
  // reexpoe o texto atual, quem digita precisa ser observado no onChangeText.
  it('rastreia o comprimento no onChangeText sem engolir o handler do consumidor', () => {
    expect(tsx).toMatch(/setInnerLength\(text\.length\)/);
    expect(tsx).toMatch(/onChangeText\?\.\(text\)/);
  });

  // defaultValue e o caso "editar denuncia rascunhada": abrir com texto e o
  // contador em 0 seria mentira ate o primeiro toque.
  it('o comprimento inicial respeita o defaultValue', () => {
    expect(tsx).toMatch(/defaultValue/);
  });

  it('description e contador dividem a mesma linha inferior', () => {
    expect(tsx).toMatch(/<BottomRow>/);
  });
});

describe('Input.styles — contador com cara de legenda, alinhado a direita', () => {
  const styles = readFileSync(join(__dirname, 'Input.styles.ts'), 'utf8');

  it('Counter existe, herda o tom neutro e apaga quando disabled', () => {
    expect(styles).toMatch(/export const Counter/);
    expect(styles).toMatch(/Counter[\s\S]*?content\.disable[\s\S]*?content\.medium/);
  });

  // margin-left auto empurra o contador pra direita mesmo sem description do
  // lado — e com description longa, ela quebra linha sem empurrar o contador
  // pra fora.
  it('BottomRow e uma linha; o contador vai pra direita por margin auto', () => {
    expect(styles).toMatch(/export const BottomRow/);
    expect(styles).toMatch(/Counter[\s\S]*?margin-left: auto/);
  });
});
