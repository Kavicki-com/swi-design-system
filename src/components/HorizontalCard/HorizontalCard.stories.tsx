import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { HorizontalCard } from './HorizontalCard';
import { iconPaths } from '../../icons';

const meta: Meta<typeof HorizontalCard> = {
  title: 'Components/HorizontalCard',
  component: HorizontalCard,
  args: {
    label: 'Editar perfil',
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    leftIcon: { control: { type: 'select' }, options: Object.keys(iconPaths) },
    rightIcon: { control: { type: 'select' }, options: Object.keys(iconPaths) },
    disabled: { control: 'boolean' },
    onPress: { action: 'press' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 360, padding: 16 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HorizontalCard>;

export const Default: Story = {
  args: { label: 'Editar perfil' },
};

export const WithLeftIcon: Story = {
  args: { label: 'Permissões', leftIcon: 'settings' },
};

export const Disabled: Story = {
  args: { label: 'Item bloqueado', disabled: true },
};
