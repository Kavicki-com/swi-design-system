import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ChatSection } from './ChatSection';
import type { ChatSectionUser } from './ChatSection.types';

const SAMPLE_USERS: ChatSectionUser[] = [
  {
    id: '1',
    name: 'Ezequiel Almeida',
    subtitle: 'Setor Leste',
    avatarUri: 'https://i.pravatar.cc/200?img=12',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Romulo Cardoso',
    subtitle: 'Setor Leste',
    avatarUri: 'https://i.pravatar.cc/200?img=15',
    unreadCount: 2,
  },
  {
    id: '3',
    name: 'Júlio Lacerda',
    subtitle: 'Setor Leste',
    avatarUri: 'https://i.pravatar.cc/200?img=33',
    unreadCount: 2,
  },
  {
    id: '4',
    name: 'Jennifer Gomes',
    subtitle: 'Setor Leste',
    avatarUri: 'https://i.pravatar.cc/200?img=49',
    unreadCount: 2,
  },
  {
    id: '5',
    name: 'Mariana Costa',
    subtitle: 'Setor Norte',
    avatarUri: 'https://i.pravatar.cc/200?img=20',
    unreadCount: 5,
  },
  {
    id: '6',
    name: 'João Silva',
    subtitle: 'Setor Sul',
    avatarUri: 'https://i.pravatar.cc/200?img=22',
  },
];

const meta: Meta<typeof ChatSection> = {
  title: 'Components/ChatSection',
  component: ChatSection,
  args: {
    users: SAMPLE_USERS.slice(0, 4),
    searchPlaceholder: 'Pesquisar Contatos',
    expandLabel: 'Expandir chat',
    fullWidth: false,
  },
  argTypes: {
    searchPlaceholder: { control: 'text' },
    expandLabel: { control: 'text' },
    fullWidth: { control: 'boolean' },
    onUserPress: { action: 'userPress' },
    onExpand: { action: 'expand' },
    onSearchChange: { action: 'searchChange' },
  },
};

export default meta;
type Story = StoryObj<typeof ChatSection>;

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

export const ManyUsers: Story = {
  name: 'Many users (scrollable)',
  args: { users: SAMPLE_USERS },
};

export const NoExpandButton: Story = {
  args: { onExpand: undefined },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [(StoryComp) => <View style={{ width: 320 }}><StoryComp /></View>],
};

export const Interactive: Story = {
  name: 'Interactive — search filter',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<string | null>(null);
    const filtered = SAMPLE_USERS.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase()),
    );
    return (
      <View style={{ gap: 12, alignItems: 'flex-start' }}>
        <Caption>{`selected: ${selected ?? 'none'} • search: "${search}"`}</Caption>
        <ChatSection
          users={filtered}
          searchValue={search}
          onSearchChange={setSearch}
          onUserPress={setSelected}
          onExpand={() => setSelected('expand-clicked')}
        />
      </View>
    );
  },
};
