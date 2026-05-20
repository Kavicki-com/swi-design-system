import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import { elevation } from '../../tokens';
import {
  Bubble,
  BubbleInner,
  MenuButton,
  MessageText,
  Row,
  TimeText,
  TopRow,
} from './ChatBubble.styles';
import type { ChatBubbleProps } from './ChatBubble.types';

export const ChatBubble = forwardRef<View, ChatBubbleProps>(
  (
    {
      message,
      time,
      position = 'right',
      avatarUri,
      onMenuPress,
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const isLeft = position === 'left';

    const avatar = avatarUri ? <Avatar uri={avatarUri} size="m" /> : null;

    const menu = onMenuPress ? (
      <MenuButton
        onPress={onMenuPress}
        accessibilityRole="button"
        accessibilityLabel="Mensagem opções"
      >
        <Icon name="more_vert" size={16} color={theme.content.dark} />
      </MenuButton>
    ) : null;

    return (
      <Row
        ref={ref}
        $position={position}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 296 }
        }
        accessibilityLabel={accessibilityLabel ?? message}
        testID={testID}
      >
        {!isLeft ? avatar : null}
        <Bubble $position={position} style={elevation.md}>
          <BubbleInner $position={position}>
            <TopRow>
              {!isLeft ? (
                <>
                  <MessageText $position={position}>{message}</MessageText>
                  {menu}
                </>
              ) : (
                <>
                  {menu}
                  <MessageText $position={position}>{message}</MessageText>
                </>
              )}
            </TopRow>
            <TimeText>{time}</TimeText>
          </BubbleInner>
        </Bubble>
        {isLeft ? avatar : null}
      </Row>
    );
  },
);

ChatBubble.displayName = 'ChatBubble';
