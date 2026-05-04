import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { BigNumbersCard } from './BigNumbersCard';
import { iconPaths } from '../../icons';

const meta: Meta<typeof BigNumbersCard> = {
  title: 'Components/BigNumbersCard',
  component: BigNumbersCard,
  args: {
    value: 3,
    label: 'Administradores',
    icon: 'account_circle',
    fullWidth: false,
  },
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    icon: { control: { type: 'select' }, options: ['', ...Object.keys(iconPaths)] },
    iconColor: { control: 'color' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof BigNumbersCard>;

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

export const Default: Story = {};

export const NoIcon: Story = { args: { icon: undefined } };

export const LargeNumber: Story = { args: { value: 1247, label: 'Funcionários' } };

export const Overview: Story = {
  name: 'Overview — variations',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 16, alignItems: 'flex-start' }}>
      <View style={{ gap: 6 }}>
        <Caption>default</Caption>
        <BigNumbersCard value={3} label="Administradores" icon="account_circle" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>row of stats</Caption>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <BigNumbersCard value={3} label="Administradores" icon="account_circle" />
          <BigNumbersCard value={142} label="Funcionários" icon="badge" />
          <BigNumbersCard value={47} label="Câmeras" icon="desktop_windows" />
          <BigNumbersCard value={12} label="Alertas" icon="notifications" />
        </View>
      </View>
      <View style={{ gap: 6 }}>
        <Caption>no icon</Caption>
        <BigNumbersCard value="99%" label="Disponibilidade" />
      </View>
    </View>
  ),
};
