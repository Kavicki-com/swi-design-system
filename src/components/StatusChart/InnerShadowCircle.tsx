import React from 'react';
import Svg, {
  Circle,
  Defs,
  FeBlend,
  FeColorMatrix,
  FeComposite,
  FeFlood,
  FeGaussianBlur,
  FeOffset,
  Filter,
} from 'react-native-svg';
import { useSvgId } from '../../utils/svgId';

// Interface duplicada no gêmeo .web.tsx (precedente StatusChartBackdrop) —
// manter os dois em sincronia.
interface InnerShadowCircleProps {
  /** Diâmetro do círculo (o Svg é size×size). */
  size: number;
  fill: string;
  /** Offset vertical da sombra (Figma Y). */
  dy: number;
  /** stdDeviation do blur (Figma blur ÷ 2). */
  blur: number;
  /** Alpha da sombra (Figma opacity do #000). */
  alpha: number;
}

/**
 * Círculo com inner shadow via filter chain SVG (FeFlood → FeBlend →
 * FeColorMatrix → FeOffset → FeGaussianBlur → FeComposite arithmetic →
 * FeColorMatrix alpha → FeBlend). Extraído do StatusChart pra ganhar o gêmeo
 * .web.tsx — os primitivos Fe* e Filter não existem no react-native-svg-web
 * (ver src/web-bundler-compat.test.ts).
 */
export const InnerShadowCircle = ({ size, fill, dy, blur, alpha }: InnerShadowCircleProps) => {
  // useId por instância: no mesmo chart coexistem o disco (Caminho 4122) e o
  // botão (Elipse 34) com params diferentes — ids fixos colidiriam no web.
  const filterId = useSvgId('inner-shadow');
  const r = size / 2;
  return (
    <Svg width={size} height={size} pointerEvents="none">
      <Defs>
        <Filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy={dy} />
          <FeGaussianBlur stdDeviation={blur} />
          <FeComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <FeColorMatrix
            type="matrix"
            values={`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${alpha} 0`}
          />
          <FeBlend mode="normal" in2="shape" result="effect_innerShadow" />
        </Filter>
      </Defs>
      <Circle cx={r} cy={r} r={r} fill={fill} filter={`url(#${filterId})`} />
    </Svg>
  );
};
