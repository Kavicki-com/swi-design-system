import { describe, expect, it } from 'vitest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SilhouetteBody } from './SilhouetteBody.web';
import { silhouetteBodyXml } from './StatusChart.paths';

describe('SilhouetteBody (web)', () => {
  it('injeta o XML da silhueta preservando o gradient da condição', () => {
    const html = renderToStaticMarkup(
      createElement(SilhouetteBody, { xml: silhouetteBodyXml('#F5667A', '#FBC2CB') }),
    );
    expect(html).toContain('stop-color="#F5667A"');
    expect(html).toContain('stop-color="#FBC2CB"');
    expect(html).toContain('url(#paint0_linear_silhouette)');
  });

  it('normaliza o root svg pra 100%/100% (paridade com o SvgXml nativo, que sobrescreve width/height)', () => {
    const html = renderToStaticMarkup(
      createElement(SilhouetteBody, { xml: silhouetteBodyXml('#3EAB2E', '#B7E9A4') }),
    );
    expect(html).toContain('width="100%"');
    expect(html).toContain('height="100%"');
    expect(html).not.toContain('width="77"');
    expect(html).not.toContain('height="263"');
    // viewBox preservado — é ele que mantém a escala do path
    expect(html).toContain('viewBox="0 0 77 263"');
  });
});
