import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Avatar } from '../Avatar';
import {
  AvatarRow,
  Badge,
  BadgeText,
  Container,
  Name,
  Subtitle,
  TextStack,
} from './ChatUserCard.styles';
import type { ChatUserCardProps } from './ChatUserCard.types';

const formatCount = (n: number): string => {
  if (n >= 100) return '99+';
  if (n < 10) return n.toString().padStart(2, '0');
  return n.toString();
};

export const ChatUserCard = forwardRef<View, ChatUserCardProps>(
  (
    {
      name,
      subtitle,
      avatarUri,
      unreadCount,
      onPress,
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const showBadge = typeof unreadCount === 'number' && unreadCount > 0;

    return (
      <Container
        ref={ref}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? name}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 196 }
        }
      >
        <AvatarRow>
          {avatarUri ? <Avatar uri={avatarUri} size="m" /> : null}
          <TextStack>
            <Name numberOfLines={1}>{name}</Name>
            {subtitle ? <Subtitle numberOfLines={1}>{subtitle}</Subtitle> : null}
          </TextStack>
        </AvatarRow>
        {showBadge ? (
          <Badge>
            <BadgeText>{formatCount(unreadCount!)}</BadgeText>
          </Badge>
        ) : null}
      </Container>
    );
  },
);

ChatUserCard.displayName = 'ChatUserCard';
