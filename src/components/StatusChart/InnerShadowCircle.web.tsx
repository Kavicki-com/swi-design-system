/**
 * Web InnerShadowCircle — mesma filter chain do nativo em SVG DOM puro.
 * Ver InnerShadowCircle.tsx pro breakdown dos primitivos.
 */
import React, { useId } from 'react';

// Interface duplicada do gêmeo nativo — manter os dois em sincronia.
interface InnerShadowCircleProps {
  size: number;
  fill: string;
  dy: number;
  blur: number;
  alpha: number;
}

export const InnerShadowCircle = ({ size, fill, dy, blur, alpha }: InnerShadowCircleProps) => {
  const filterId = `inner-shadow-${useId().replace(/:/g, '')}`;
  const r = size / 2;
  return (
    <svg width={size} height={size} style={{ pointerEvents: 'none' }}>
      <defs>
        <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={dy} />
          <feGaussianBlur stdDeviation={blur} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${alpha} 0`}
          />
          <feBlend mode="normal" in2="shape" result="effect_innerShadow" />
        </filter>
      </defs>
      <circle cx={r} cy={r} r={r} fill={fill} filter={`url(#${filterId})`} />
    </svg>
  );
};
