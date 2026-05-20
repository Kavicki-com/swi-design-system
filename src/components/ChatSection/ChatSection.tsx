import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Button } from '../Button';
import { ChatUserCard } from '../ChatUserCard';
import { SearchInput } from '../SearchInput';
import { useTheme } from '../../theme';
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
      renderCard,
    },
    ref,
  ) => {
    const theme = useTheme();
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
            {users.map((user) => {
              const card = (
                <ChatUserCard
                  name={user.name}
                  subtitle={user.subtitle}
                  avatarUri={user.avatarUri}
                  unreadCount={user.unreadCount}
                  onPress={onUserPress ? () => onUserPress(user.id) : undefined}
                  fullWidth
                />
              );
              return (
                <React.Fragment key={user.id}>
                  {renderCard ? renderCard(card, user) : card}
                </React.Fragment>
              );
            })}
          </ListInner>
        </ListScroll>
        {onExpand ? (
          <Button
            label={expandLabel}
            variant="contained"
            backgroundColor={theme.background}
            labelColor={theme.content.primaryLight}
            fullWidth
            onPress={onExpand}
          />
        ) : null}
      </Container>
    );
  },
);

ChatSection.displayName = 'ChatSection';
