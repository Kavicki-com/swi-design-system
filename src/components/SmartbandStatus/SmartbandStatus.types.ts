export interface SmartbandStatusProps {
  /**
   * Sync progress 0..1 (drives the ProgressBar). 0 at start, 1 when sync
   * completes.
   */
  progress: number;
  /**
   * Heart rate value (bpm). `null` renders the `/` placeholder used while
   * sync is in progress; a number renders the value (e.g. 88).
   */
  heartRate?: number | null;
  /**
   * Blood pressure label (e.g. "12/8"). `null` renders the `/` placeholder.
   */
  bloodPressure?: string | null;
  /** Status message rendered below the sync rows. */
  message: string;
  testID?: string;
  accessibilityLabel?: string;
}
