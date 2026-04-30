import React from 'react';
import type { Preview } from '@storybook/react';
import { SwiThemeProvider } from '../src/theme';
import { theme } from '../src/tokens';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'swi-dark',
      values: [
        { name: 'swi-dark', value: theme.background },
        { name: 'neutral-light', value: '#FAFAFA' },
      ],
    },
    viewport: {
      viewports: {
        iphone14: { name: 'iPhone 14', styles: { width: '390px', height: '844px' }, type: 'mobile' },
        iphoneSE: { name: 'iPhone SE', styles: { width: '375px', height: '667px' }, type: 'mobile' },
        pixel7: { name: 'Pixel 7', styles: { width: '412px', height: '915px' }, type: 'mobile' },
        desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' }, type: 'desktop' },
      },
      defaultViewport: 'desktop',
    },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    options: {
      storySort: {
        order: ['Tokens', ['Primitive', 'Semantic'], 'Components'],
      },
    },
  },
  decorators: [
    (Story) => (
      <SwiThemeProvider>
        <div style={{ padding: 24, minHeight: '100vh', backgroundColor: theme.background }}>
          <Story />
        </div>
      </SwiThemeProvider>
    ),
  ],
};

export default preview;
