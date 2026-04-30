import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body.m',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'subtitle.l',
        'subtitle.m',
        'subtitle.s',
        'body.l',
        'body.m',
        'body.s',
        'caption.s',
        'caption.xs',
      ],
    },
    color: { control: 'color' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

const Row = ({ caption, children }: { caption: string; children: React.ReactNode }) => (
  <View style={{ flexDirection: 'column', gap: 4 }}>
    <Text variant="caption.xs" color="#9F9F9F">
      {caption}
    </Text>
    {children}
  </View>
);

export const Overview: Story = {
  name: 'Overview — all variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'column', gap: 16 }}>
      <Row caption="subtitle.l — Inter Medium 24px">
        <Text variant="subtitle.l">The quick brown fox jumps over the lazy dog</Text>
      </Row>
      <Row caption="subtitle.m — Inter Medium 16px">
        <Text variant="subtitle.m">The quick brown fox jumps over the lazy dog</Text>
      </Row>
      <Row caption="subtitle.s — Inter Medium 12px">
        <Text variant="subtitle.s">The quick brown fox jumps over the lazy dog</Text>
      </Row>
      <Row caption="body.l — Inter Medium 20px">
        <Text variant="body.l">The quick brown fox jumps over the lazy dog</Text>
      </Row>
      <Row caption="body.m — Inter Regular 14px">
        <Text variant="body.m">The quick brown fox jumps over the lazy dog</Text>
      </Row>
      <Row caption="body.s — Inter Medium 12px">
        <Text variant="body.s">The quick brown fox jumps over the lazy dog</Text>
      </Row>
      <Row caption="caption.s — Inter Medium 12px">
        <Text variant="caption.s">The quick brown fox jumps over the lazy dog</Text>
      </Row>
      <Row caption="caption.xs — Inter Bold 8px">
        <Text variant="caption.xs">The quick brown fox jumps over the lazy dog</Text>
      </Row>
    </View>
  ),
};

export const Playground: Story = {};
