/**
 * Web SilhouetteBody — injeta o XML da silhueta direto no DOM. O XML vem de
 * silhouetteBodyXml (gerado internamente pelo DS, nunca input de usuário),
 * então dangerouslySetInnerHTML é seguro aqui.
 */
import React, { useMemo } from 'react';

// Interface duplicada do gêmeo nativo — manter os dois em sincronia.
interface SilhouetteBodyProps {
  xml: string;
}

export const SilhouetteBody = ({ xml }: SilhouetteBodyProps) => {
  // Paridade com o SvgXml nativo, que sobrescreve width/height pra 100%:
  // troca os atributos fixos do root (77×263) mantendo o viewBox, que é quem
  // escala o path.
  const normalized = useMemo(
    () => xml.replace(/^<svg width="\d+" height="\d+"/, '<svg width="100%" height="100%"'),
    [xml],
  );
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      dangerouslySetInnerHTML={{ __html: normalized }}
    />
  );
};
