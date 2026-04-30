import React from 'react';
import { ThemeProvider, useTheme as useStyledTheme } from 'styled-components/native';
import { theme, type Theme } from '../tokens';

export interface SwiThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const SwiThemeProvider = ({ children, theme: override }: SwiThemeProviderProps) => (
  <ThemeProvider theme={override ?? theme}>{children}</ThemeProvider>
);

export const useTheme = useStyledTheme as () => Theme;
