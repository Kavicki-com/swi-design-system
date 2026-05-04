import type { ReactNode } from 'react';

export interface AccordionProps {
  title: string;
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  showIconLeft?: boolean;
  showIconRight?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
