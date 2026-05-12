import React, { Fragment } from 'react';
import { Step } from '../Step';
import type { StepState } from '../Step';
import { Connector, Container } from './StepBar.styles';
import type { StepBarProps } from './StepBar.types';

const stateFor = (stepNum: number, current: number): StepState => {
  if (stepNum < current) return 'done';
  if (stepNum === current) return 'current';
  return 'default';
};

export const StepBar = ({ total, current, testID, accessibilityLabel }: StepBarProps) => (
  <Container
    testID={testID}
    accessibilityLabel={accessibilityLabel ?? `Etapa ${current} de ${total}`}
    accessibilityRole="progressbar"
  >
    {Array.from({ length: total }, (_, idx) => {
      const stepNum = idx + 1;
      const state = stateFor(stepNum, current);
      return (
        <Fragment key={stepNum}>
          <Step state={state} number={state === 'default' ? stepNum : undefined} />
          {idx < total - 1 ? <Connector $reached={stepNum < current} /> : null}
        </Fragment>
      );
    })}
  </Container>
);

StepBar.displayName = 'StepBar';
