import React, { Fragment } from 'react';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Rect, Stop } from 'react-native-svg';
import { Step } from '../Step';
import type { StepState } from '../Step';
import { Connector, Container, GradientTrack } from './StepBar.styles';
import type { StepBarProps } from './StepBar.types';

const stateFor = (stepNum: number, current: number): StepState => {
  if (stepNum < current) return 'done';
  if (stepNum === current) return 'current';
  return 'default';
};

// Reached-state connector: 4px-thick rounded line painted with the Figma
// linear gradient `#8AD2E2 → #62BB81` (light-blue to primary green). The SVG
// fills the rounded GradientTrack so geometry matches the solid Connector.
const GradientConnector = () => (
  <GradientTrack>
    <Svg width="100%" height="100%" viewBox="0 0 100 4" preserveAspectRatio="none">
      <Defs>
        <SvgLinearGradient id="stepbar-reached" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
          <Stop offset="0%" stopColor="#8AD2E2" />
          <Stop offset="100%" stopColor="#62BB81" />
        </SvgLinearGradient>
      </Defs>
      <Rect x={0} y={0} width={100} height={4} fill="url(#stepbar-reached)" />
    </Svg>
  </GradientTrack>
);

export const StepBar = ({ total, current, testID, accessibilityLabel }: StepBarProps) => (
  <Container
    testID={testID}
    accessibilityLabel={accessibilityLabel ?? `Etapa ${current} de ${total}`}
    accessibilityRole="progressbar"
  >
    {Array.from({ length: total }, (_, idx) => {
      const stepNum = idx + 1;
      const state = stateFor(stepNum, current);
      const reached = stepNum < current;
      return (
        <Fragment key={stepNum}>
          <Step state={state} number={state === 'default' ? stepNum : undefined} />
          {idx < total - 1
            ? reached
              ? <GradientConnector />
              : <Connector $reached={false} />
            : null}
        </Fragment>
      );
    })}
  </Container>
);

StepBar.displayName = 'StepBar';
