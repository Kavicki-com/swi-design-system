import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Avatar, type AvatarSize } from '../Avatar';
import { AvatarSlot, CountBadge, CountText, Row } from './AvatarGroup.styles';
import type { AvatarGroupProps } from './AvatarGroup.types';

const AVATAR_PX: Record<AvatarSize, number> = { s: 24, m: 40, l: 64 };
const BADGE_PX: Record<AvatarSize, number> = { s: 16, m: 24, l: 32 };

const overlapFor = (size: AvatarSize) => Math.round(AVATAR_PX[size] * 0.4);

export const AvatarGroup = forwardRef<View, AvatarGroupProps>(
  (
    {
      avatars,
      totalCount,
      maxVisible,
      size = 'm',
      bordered = true,
      borderColor,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const visibleAvatars =
      typeof maxVisible === 'number' ? avatars.slice(0, maxVisible) : avatars;
    const total = totalCount ?? avatars.length;
    const remaining = Math.max(0, total - visibleAvatars.length);
    const overlap = -overlapFor(size);

    return (
      <Row ref={ref} accessibilityLabel={accessibilityLabel} testID={testID}>
        {visibleAvatars.map((item, idx) => (
          <AvatarSlot key={idx} $marginLeft={idx === 0 ? 0 : overlap}>
            <Avatar
              uri={item.uri}
              size={size}
              bordered={bordered}
              borderColor={borderColor}
              accessibilityLabel={item.alt}
            />
          </AvatarSlot>
        ))}
        {remaining > 0 ? (
          <CountBadge
            $size={BADGE_PX[size]}
            $marginLeft={visibleAvatars.length === 0 ? 0 : overlap}
          >
            <CountText>{`+${remaining}`}</CountText>
          </CountBadge>
        ) : null}
      </Row>
    );
  },
);

AvatarGroup.displayName = 'AvatarGroup';
