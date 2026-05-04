import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { ChatBubble } from './ChatBubble';

const AVATAR_RIGHT = 'https://i.pravatar.cc/200?img=12';
const AVATAR_LEFT = 'https://i.pravatar.cc/200?img=15';

const meta: Meta<typeof ChatBubble> = {
  title: 'Core Components/ChatBubble',
  component: ChatBubble,
  args: {
    message: 'Bom dia! Alguma novidade sobre a detonação de explosivos na área 7?',
    time: '14:25',
    position: 'right',
    avatarUri: AVATAR_RIGHT,
    fullWidth: false,
  },
  argTypes: {
    message: { control: 'text' },
    time: { control: 'text' },
    position: { control: { type: 'inline-radio' }, options: ['left', 'right'] },
    avatarUri: { control: 'text' },
    fullWidth: { control: 'boolean' },
    onMenuPress: { action: 'menuPress' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 600 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ChatBubble>;

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

export const Right: Story = {
  args: { position: 'right', avatarUri: AVATAR_RIGHT, time: '14:25' },
};

export const Left: Story = {
  args: {
    position: 'left',
    avatarUri: AVATAR_LEFT,
    time: '14:57',
    message: 'Olá! Sim, tudo ok por aqui. Precisamos de mais explosivos para a próxima semana.',
  },
};

export const NoAvatar: Story = {
  args: { avatarUri: undefined },
};

export const NoMenu: Story = {
  name: 'No menu (no onMenuPress)',
  args: { onMenuPress: undefined },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};

export const Conversation: Story = {
  name: 'Conversation thread',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 16, width: 600 }}>
      <ChatBubble
        position="right"
        avatarUri={AVATAR_RIGHT}
        message="Bom dia! Alguma novidade sobre a detonação de explosivos na área 7?"
        time="14:25"
        onMenuPress={() => {}}
      />
      <ChatBubble
        position="left"
        avatarUri={AVATAR_LEFT}
        message="Olá! Sim, tudo ok por aqui. Precisamos de mais explosivos para a próxima semana."
        time="14:57"
        onMenuPress={() => {}}
      />
      <ChatBubble
        position="right"
        avatarUri={AVATAR_RIGHT}
        message="Perfeito, vou colocar no pedido. Mais alguma demanda?"
        time="14:58"
        onMenuPress={() => {}}
      />
    </View>
  ),
};

export const Overview: Story = {
  name: 'Overview — all states',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 24, width: 600 }}>
      <View style={{ gap: 8 }}>
        <Caption>right</Caption>
        <ChatBubble
          position="right"
          avatarUri={AVATAR_RIGHT}
          message="Bom dia! Alguma novidade sobre a detonação?"
          time="14:25"
          onMenuPress={() => {}}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Caption>left</Caption>
        <ChatBubble
          position="left"
          avatarUri={AVATAR_LEFT}
          message="Olá! Sim, tudo ok por aqui."
          time="14:57"
          onMenuPress={() => {}}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Caption>full width — right</Caption>
        <ChatBubble
          position="right"
          avatarUri={AVATAR_RIGHT}
          message="Bom dia! Alguma novidade sobre a detonação?"
          time="14:25"
          fullWidth
          onMenuPress={() => {}}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Caption>no menu</Caption>
        <ChatBubble
          position="right"
          avatarUri={AVATAR_RIGHT}
          message="Sem menu de opções."
          time="15:00"
        />
      </View>
      <View style={{ gap: 8 }}>
        <Caption>no avatar</Caption>
        <ChatBubble
          position="right"
          message="Sem avatar."
          time="15:01"
          onMenuPress={() => {}}
        />
      </View>
    </View>
  ),
};
