import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { ProgressBar } from '../ProgressBar';
import { useTheme } from '../../theme';
import {
  ProgressSlot,
  Row,
  StatItem,
  StatsRow,
  StatText,
  StatValueBold,
  VitalsCard,
} from './HeaderUserInfo.styles';
import type { HeaderUserInfoProps } from './HeaderUserInfo.types';

export const HeaderUserInfo = forwardRef<View, HeaderUserInfoProps>(
  (
    {
      bpm,
      pressure,
      progress = 0,
      avatarUri,
      bpmUnit = 'bpm',
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();

    return (
      <Row
        ref={ref}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
      >
        <VitalsCard>
          <StatsRow>
            <StatItem>
              <Icon name="favorite" size={20} color={theme.content.dark} />
              <StatText>
                <StatValueBold>{bpm} </StatValueBold>
                {bpmUnit}
              </StatText>
            </StatItem>
            <StatItem>
              <Icon name="monitor_heart" size={20} color={theme.content.dark} />
              <StatValueBold>{pressure}</StatValueBold>
            </StatItem>
          </StatsRow>
          <ProgressSlot>
            <ProgressBar value={progress} />
          </ProgressSlot>
        </VitalsCard>
        <Avatar uri={avatarUri} size="l" bordered />
      </Row>
    );
  },
);

HeaderUserInfo.displayName = 'HeaderUserInfo';
