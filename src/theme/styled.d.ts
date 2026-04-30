import 'styled-components';
import type { Theme } from '../tokens';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
