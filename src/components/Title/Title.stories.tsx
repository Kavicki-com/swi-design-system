import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  args: {
    children: 'The quick brown fox',
    variant: 'title.m',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['title.l', 'title.m', 'title.s', 'title.xs'],
    },
    color: { control: 'color' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Overview: Story = {
  name: 'Overview — all variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'column', gap: 12 }}>
      <Title variant="title.l">title.l — 32px Montserrat Bold</Title>
      <Title variant="title.m">title.m — 24px Montserrat Bold</Title>
      <Title variant="title.s">title.s — 20px Montserrat Bold</Title>
      <Title variant="title.xs">title.xs — 16px Montserrat Bold</Title>
    </View>
  ),
};

export const Playground: Story = {};
export const Large: Story = { args: { variant: 'title.l' } };
export const Medium: Story = { args: { variant: 'title.m' } };
export const Small: Story = { args: { variant: 'title.s' } };
export const ExtraSmall: Story = { args: { variant: 'title.xs' } };
