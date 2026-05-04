import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Button } from '../Button';
import { ChatUserCard } from '../ChatUserCard';
import { SearchInput } from '../SearchInput';
import { Container, ListInner, ListScroll } from './ChatSection.styles';
import type { ChatSectionProps } from './ChatSection.types';

export const ChatSection = forwardRef<View, ChatSectionProps>(
  (
    {
      users,
      searchValue,
      onSearchChange,
      searchPlaceholder = 'Pesquisar Contatos',
      onUserPress,
      onExpand,
      expandLabel = 'Expandir chat',
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    return (
      <Container
        ref={ref}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 228 }
        }
      >
        <SearchInput
          value={searchValue}
          onChangeText={onSearchChange}
          placeholder={searchPlaceholder}
        />
        <ListScroll>
          <ListInner>
            {users.map((user) => (
              <ChatUserCard
                key={user.id}
                name={user.name}
                subtitle={user.subtitle}
                avatarUri={user.avatarUri}
                unreadCount={user.unreadCount}
                onPress={onUserPress ? () => onUserPress(user.id) : undefined}
                fullWidth
              />
            ))}
          </ListInner>
        </ListScroll>
        {onExpand ? (
          <Button label={expandLabel} variant="outline" fullWidth onPress={onExpand} />
        ) : null}
      </Container>
    );
  },
);

ChatSection.displayName = 'ChatSection';
