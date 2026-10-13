import { describe, expect, it } from 'vitest';
import { passwordEyeIcon, passwordEyeLabel } from './Input.password';

// O olho da senha mostra "revelar" enquanto o texto esta oculto e "ocultar"
// quando o texto esta visivel. O rotulo acompanha, para o leitor de tela
// anunciar a acao e nao o estado.

describe('passwordEyeIcon', () => {
  it('oculto: oferece revelar (visibility)', () => {
    expect(passwordEyeIcon(false)).toBe('visibility');
  });
  it('visivel: oferece ocultar (visibility_off)', () => {
    expect(passwordEyeIcon(true)).toBe('visibility_off');
  });
});

describe('passwordEyeLabel', () => {
  it('oculto: "Mostrar senha"', () => {
    expect(passwordEyeLabel(false)).toBe('Mostrar senha');
  });
  it('visivel: "Ocultar senha"', () => {
    expect(passwordEyeLabel(true)).toBe('Ocultar senha');
  });
});
