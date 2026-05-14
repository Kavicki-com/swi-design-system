import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { TopBar } from './TopBar';

const meta: Meta<typeof TopBar> = {
  title: 'Components/TopBar',
  component: TopBar,
  args: {
    title: 'Dados pessoais',
  },
  argTypes: {
    title: { control: 'text' },
    backLabel: { control: 'text' },
    onBack: { action: 'back' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 360 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: { title: 'Dados pessoais', onBack: () => {} },
};

export const WithCustomBackLabel: Story = {
  args: { title: 'Confirmar', onBack: () => {}, backLabel: 'Cancelar' },
};

export const TitleOnly: Story = {
  args: { title: 'Dados pessoais' },
};
