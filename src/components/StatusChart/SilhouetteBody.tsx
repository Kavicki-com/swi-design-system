import React from 'react';
import { SvgXml } from 'react-native-svg';

// Interface duplicada no gêmeo .web.tsx — manter os dois em sincronia.
interface SilhouetteBodyProps {
  /** XML completo da silhueta (silhouetteBodyXml). */
  xml: string;
}

/**
 * Silhueta do corpo (Caminho 4123) — extraída do StatusChart pra ganhar o
 * gêmeo .web.tsx: SvgXml não existe no react-native-svg-web (ver
 * src/web-bundler-compat.test.ts). width/height 100% preenchem o wrapper
 * posicionado pelo StatusChart pai.
 */
export const SilhouetteBody = ({ xml }: SilhouetteBodyProps) => (
  <SvgXml xml={xml} width="100%" height="100%" />
);
