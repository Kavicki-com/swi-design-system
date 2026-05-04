import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Image } from './Image';

const SAMPLE = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&q=60';

const meta: Meta<typeof Image> = {
  title: 'Core Components/Image',
  component: Image,
  args: {
    source: SAMPLE,
    width: 200,
    height: 200,
    resizeMode: 'cover',
    accessibilityLabel: 'Sample image',
  },
  argTypes: {
    source: { control: 'text' },
    width: { control: { type: 'range', min: 40, max: 400, step: 10 } },
    height: { control: { type: 'range', min: 40, max: 400, step: 10 } },
    resizeMode: {
      control: 'radio',
      options: ['cover', 'fill', 'contain', 'repeat', 'stretch', 'center'],
    },
    accessibilityLabel: { control: 'text' },
    accessibilityHint: { control: 'text' },
    onLoad: { action: 'onLoad' },
    onError: { action: 'onError' },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

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

const ResizeShowcase = ({ mode }: { mode: 'cover' | 'fill' | 'contain' | 'repeat' | 'stretch' | 'center' }) => (
  <Group caption={mode}>
    <View
      style={{
        width: 160,
        height: 100,
        backgroundColor: '#303030',
        borderWidth: 1,
        borderColor: '#3F3F3F',
      }}
    >
      <Image
        source={SAMPLE}
        width={160}
        height={100}
        resizeMode={mode}
        accessibilityLabel="Sample image"
      />
    </View>
  </Group>
);

export const Overview: Story = {
  name: 'Overview — resize modes',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 24 }}>
      <ResizeShowcase mode="cover" />
      <ResizeShowcase mode="contain" />
      <ResizeShowcase mode="stretch" />
      <ResizeShowcase mode="fill" />
      <ResizeShowcase mode="repeat" />
      <ResizeShowcase mode="center" />
    </View>
  ),
};

export const Playground: Story = {};

export const Cover: Story = { args: { resizeMode: 'cover' } };
export const Contain: Story = { args: { resizeMode: 'contain' } };
export const Stretch: Story = { args: { resizeMode: 'stretch' } };
export const Center: Story = { args: { resizeMode: 'center' } };
