import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Core Components/Tooltip',
  component: Tooltip,
  args: {
    label: 'Operadores',
    side: 'top',
  },
  argTypes: {
    label: { control: 'text' },
    side: { control: 'radio', options: ['top', 'bottom', 'left', 'right'] },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ padding: 64, alignItems: 'flex-start' }}>
        <StoryComp />
      </View>
    ),
  ],
  render: (args) => (
    <Tooltip {...args}>
      <Button
        variant="surface"
        shape="pill"
        size="large"
        accessibilityLabel={args.label}
        iconLeft={<Icon name="person_apron" size={24} />}
      />
    </Tooltip>
  ),
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

/** Passe o mouse sobre o botao para ver a dica (so web). */
export const Top: Story = {};
export const Bottom: Story = { args: { side: 'bottom' } };
export const Left: Story = { args: { side: 'left', label: 'Mapa de calor' } };
export const Right: Story = { args: { side: 'right', label: 'Câmeras' } };
