import React from 'react';
import { Dot, Label } from './Step.styles';
import type { StepProps } from './Step.types';

const renderContent = (state: StepProps['state'], number?: number) => {
  if (state === 'current') return '●';
  if (state === 'done') return '✓';
  return number != null ? String(number) : '';
};

export const Step = ({ state, number, testID, accessibilityLabel }: StepProps) => (
  <Dot
    $state={state}
    testID={testID}
    accessibilityLabel={accessibilityLabel}
    accessibilityRole={accessibilityLabel ? 'image' : undefined}
  >
    <Label $state={state}>{renderContent(state, number)}</Label>
  </Dot>
);

Step.displayName = 'Step';
