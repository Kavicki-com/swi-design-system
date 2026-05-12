export interface StepBarProps {
  /** Total number of steps in the flow. */
  total: number;
  /**
   * 1-based current step index. Steps before `current` render as `done`,
   * the step at `current` renders as `current`, and steps after render as
   * `default` with their number.
   */
  current: number;
  testID?: string;
  accessibilityLabel?: string;
}
