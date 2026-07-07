import { describe, expect, it } from 'vitest';
import { SILHOUETTE_BODY_XML, silhouetteBodyXml } from './StatusChart.paths';

describe('silhouetteBodyXml', () => {
  it('injeta os stops do gradient no XML', () => {
    const xml = silhouetteBodyXml('#F5667A', '#FBC2CB');
    expect(xml).toContain('stop-color="#F5667A"');
    expect(xml).toContain('stop-color="#FBC2CB"');
  });

  it('SILHOUETTE_BODY_XML (back-compat) é a variante good byte-idêntica ao raw Caminho 4123.svg', () => {
    // Invariância: good = surface.success→successLight = #3EAB2E→#B7E9A4.
    // Se este teste quebrar, a variante good mudou visualmente — o que
    // violaria a paridade pedida com o SVG raw (ver header do paths.ts).
    expect(SILHOUETTE_BODY_XML).toBe(silhouetteBodyXml('#3EAB2E', '#B7E9A4'));
    expect(SILHOUETTE_BODY_XML).toContain('stop-color="#3EAB2E"');
    expect(SILHOUETTE_BODY_XML).toContain('stop-color="#B7E9A4"');
  });
});
