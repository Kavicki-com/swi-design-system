import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { ChatUserCard } from './ChatUserCard';

const AVATAR_1 = 'https://i.pravatar.cc/200?img=12';
const AVATAR_2 = 'https://i.pravatar.cc/200?img=15';
const AVATAR_3 = 'https://i.pravatar.cc/200?img=33';
const AVATAR_4 = 'https://i.pravatar.cc/200?img=49';

const meta: Meta<typeof ChatUserCard> = {
  title: 'Components/ChatUserCard',
  component: ChatUserCard,
  args: {
    name: 'Ezequiel Almeida',
    subtitle: 'Setor Leste',
    avatarUri: AVATAR_1,
    unreadCount: 2,
    fullWidth: false,
  },
  argTypes: {
    name: { control: 'text' },
    subtitle: { control: 'text' },
    avatarUri: { control: 'text' },
    unreadCount: { control: { type: 'number', min: 0, max: 200, step: 1 } },
    fullWidth: { control: 'boolean' },
    onPress: { action: 'press' },
  },
};

export default meta;
type Story = StoryObj<typeof ChatUserCard>;

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

export const NoUnread: Story = { args: { unreadCount: 0 } };
export const SingleUnread: Story = { args: { unreadCount: 1 } };
export const ManyUnread: Story = { args: { unreadCount: 47 } };
export const OverHundredUnread: Story = { args: { unreadCount: 142 } };
export const NoSubtitle: Story = { args: { subtitle: undefined } };
export const NoAvatar: Story = { args: { avatarUri: undefined } };

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [(StoryComp) => <View style={{ width: 320 }}><StoryComp /></View>],
};

export const Listing: Story = {
  name: 'Listing — many cards stacked',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 8, width: 196 }}>
      <ChatUserCard name="Ezequiel Almeida" subtitle="Setor Leste" avatarUri={AVATAR_1} unreadCount={2} fullWidth />
      <ChatUserCard name="Mariana Costa" subtitle="Setor Norte" avatarUri={AVATAR_2} unreadCount={12} fullWidth />
      <ChatUserCard name="João Silva" subtitle="Setor Sul" avatarUri={AVATAR_3} fullWidth />
      <ChatUserCard name="Larissa Mendes" subtitle="Setor Oeste" avatarUri={AVATAR_4} unreadCount={1} fullWidth />
    </View>
  ),
};

export const Overview: Story = {
  name: 'Overview — all states',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 16, alignItems: 'flex-start' }}>
      <View style={{ gap: 6 }}>
        <Caption>default — 02 unread</Caption>
        <ChatUserCard name="Ezequiel Almeida" subtitle="Setor Leste" avatarUri={AVATAR_1} unreadCount={2} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>no unread (badge hidden)</Caption>
        <ChatUserCard name="Mariana Costa" subtitle="Setor Norte" avatarUri={AVATAR_2} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>many unread — 47</Caption>
        <ChatUserCard name="João Silva" subtitle="Setor Sul" avatarUri={AVATAR_3} unreadCount={47} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>over 99 — 99+</Caption>
        <ChatUserCard name="Larissa Mendes" subtitle="Setor Oeste" avatarUri={AVATAR_4} unreadCount={142} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>no avatar</Caption>
        <ChatUserCard name="Ezequiel Almeida" subtitle="Setor Leste" unreadCount={2} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>no subtitle</Caption>
        <ChatUserCard name="Ezequiel Almeida" avatarUri={AVATAR_1} unreadCount={2} />
      </View>
    </View>
  ),
};
