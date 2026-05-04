import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { StatusTag } from './StatusTag';

const meta: Meta<typeof StatusTag> = {
  title: 'Core Components/StatusTag',
  component: StatusTag,
  args: {
    status: 'canceled',
    fullWidth: false,
  },
  argTypes: {
    status: { control: { type: 'inline-radio' }, options: ['canceled', 'pending', 'accept'] },
    label: { control: 'text' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof StatusTag>;

const Caption = ({ children }: { children: string }) => (
  <Text
    style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: 11,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: '#9F9F9F',
    }}
  >
    {children}
  </Text>
);

export const Playground: Story = {};

export const Canceled: Story = { args: { status: 'canceled' } };
export const Pending: Story = { args: { status: 'pending' } };
export const Accept: Story = { args: { status: 'accept' } };

export const CustomLabel: Story = {
  args: { status: 'accept', label: 'Aprovado' },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [(StoryComp) => <View style={{ width: 240 }}><StoryComp /></View>],
};

export const Overview: Story = {
  name: 'Overview — all statuses',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 6 }}>
        <Caption>canceled</Caption>
        <StatusTag status="canceled" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>pending</Caption>
        <StatusTag status="pending" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>accept</Caption>
        <StatusTag status="accept" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>full width — accept</Caption>
        <View style={{ width: 240 }}>
          <StatusTag status="accept" fullWidth />
        </View>
      </View>
      <View style={{ gap: 6 }}>
        <Caption>custom label — pending</Caption>
        <StatusTag status="pending" label="Em Análise" />
      </View>
    </View>
  ),
};
