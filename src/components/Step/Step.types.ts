export type StepState = 'default' | 'current' | 'done';

export interface StepProps {
  /** Visual state of the step. */
  state: StepState;
  /**
   * 1-based step number displayed when `state === 'default'`. Required for
   * default state; ignored for `current` (renders ●) and `done` (renders ✓).
   */
  number?: number;
  testID?: string;
  accessibilityLabel?: string;
}
