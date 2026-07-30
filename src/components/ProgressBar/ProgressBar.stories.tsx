import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Core Components/ProgressBar',
  component: ProgressBar,
  args: { value: 46, disabled: false },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 220 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

const Group = ({ caption, children }: { caption: string; children: React.ReactNode }) => (
  <View style={{ flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
    <Text
      style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 11,
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: '#9F9F9F',
      }}
    >
      {caption}
    </Text>
    {children}
  </View>
);

export const Overview: Story = {
  name: 'Overview — all variations',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 280 }}>
        <StoryComp />
      </View>
    ),
  ],
  render: () => (
    <View style={{ flexDirection: 'column', gap: 24 }}>
      <Group caption="0%">
        <View style={{ width: 220 }}>
          <ProgressBar value={0} />
        </View>
      </Group>
      <Group caption="in-progress (46%)">
        <View style={{ width: 220 }}>
          <ProgressBar value={46} />
        </View>
      </Group>
      <Group caption="100%">
        <View style={{ width: 220 }}>
          <ProgressBar value={100} />
        </View>
      </Group>
      <Group caption="disabled — empty">
        <View style={{ width: 220 }}>
          <ProgressBar value={0} disabled />
        </View>
      </Group>
      <Group caption="disabled — in-progress">
        <View style={{ width: 220 }}>
          <ProgressBar value={46} disabled />
        </View>
      </Group>
      <Group caption="disabled — full">
        <View style={{ width: 220 }}>
          <ProgressBar value={100} disabled />
        </View>
      </Group>
    </View>
  ),
};

// Modo inset: track sólido com o fill embutido, sem a moldura de 1px do
// `bordered` e com raio próprio. Os números abaixo são o call site real do
// menu de detalhes do usuário do painel (300×12, inset 2, raio 3).
// `animated` cresce de 0 até o valor na montagem: recarregue a story pra ver.
export const InsetAnimated: Story = {
  name: 'Inset + animated (menu do painel)',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 320 }}>
        <StoryComp />
      </View>
    ),
  ],
  render: () => (
    <View style={{ flexDirection: 'column', gap: 24 }}>
      <Group caption="inset — estático (72%)">
        <View style={{ width: 300 }}>
          <ProgressBar value={72} inset={2} trackHeight={12} trackRadius={3} />
        </View>
      </Group>
      <Group caption="inset + animated (72%, 2s ease-out)">
        <View style={{ width: 300 }}>
          <ProgressBar value={72} inset={2} trackHeight={12} trackRadius={3} animated />
        </View>
      </Group>
      <Group caption="inset — disabled">
        <View style={{ width: 300 }}>
          <ProgressBar value={72} inset={2} trackHeight={12} trackRadius={3} disabled />
        </View>
      </Group>
      <Group caption="inset + gradient (o fill estica pros 8px)">
        <View style={{ width: 300 }}>
          <ProgressBar
            value={72}
            inset={2}
            trackHeight={12}
            trackRadius={3}
            gradient={['#3eab2e', '#ef8600', '#f5667a']}
          />
        </View>
      </Group>
    </View>
  ),
};

export const Playground: Story = {};

export const Empty: Story = { args: { value: 0 } };
export const Half: Story = { args: { value: 50 } };
export const Full: Story = { args: { value: 100 } };
export const DisabledEmpty: Story = { args: { value: 0, disabled: true } };
export const DisabledHalf: Story = { args: { value: 50, disabled: true } };
export const DisabledFull: Story = { args: { value: 100, disabled: true } };
