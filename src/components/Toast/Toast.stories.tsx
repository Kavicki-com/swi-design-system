import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  args: {
    variant: 'info',
    title: 'Title',
    message: 'A short helper message.',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['error', 'success', 'warning', 'info'],
    },
    title: { control: 'text' },
    message: { control: 'text' },
    onClose: { action: 'onClose' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 280 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Overview: Story = {
  name: 'Overview — all variants',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 280 }}>
        <StoryComp />
      </View>
    ),
  ],
  render: () => (
    <View style={{ flexDirection: 'column', gap: 12 }}>
      <Toast variant="error" title="Error" message="Something went wrong." onClose={() => {}} />
      <Toast variant="success" title="Success" message="Action completed." onClose={() => {}} />
      <Toast variant="warning" title="Warning" message="Heads up — review this." onClose={() => {}} />
      <Toast variant="info" title="Info" message="Just so you know." onClose={() => {}} />
    </View>
  ),
};

export const Playground: Story = {
  args: { onClose: () => {} },
};

export const Error: Story = { args: { variant: 'error', title: 'Error', onClose: () => {} } };
export const Success: Story = { args: { variant: 'success', title: 'Success', onClose: () => {} } };
export const Warning: Story = { args: { variant: 'warning', title: 'Warning', onClose: () => {} } };
export const Info: Story = { args: { variant: 'info', title: 'Info', onClose: () => {} } };
export const TitleOnly: Story = { args: { message: undefined, onClose: () => {} } };
export const NoCloseButton: Story = { args: { onClose: undefined } };
