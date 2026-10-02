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
import { missingReadingLabel, readingProgress, readingText } from '../../utils/reading';

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
      heartIconName = 'favorite',
      pressureIconName = 'monitor_heart',
      bordered = true,
      borderColor,
    },
    ref,
  ) => {
    const theme = useTheme();

    return (
      <Row
        ref={ref}
        accessibilityLabel={accessibilityLabel ?? missingReadingLabel(undefined, [bpm, pressure])}
        testID={testID}
      >
        <VitalsCard>
          <StatsRow>
            <StatItem>
              <Icon name={heartIconName} size={20} color={theme.content.dark} />
              <StatText>
                <StatValueBold>{readingText(bpm)} </StatValueBold>
                {bpmUnit}
              </StatText>
            </StatItem>
            <StatItem>
              <Icon name={pressureIconName} size={20} color={theme.content.dark} />
              <StatValueBold>{readingText(pressure)}</StatValueBold>
            </StatItem>
          </StatsRow>
          <ProgressSlot>
            <ProgressBar value={readingProgress(progress)} />
          </ProgressSlot>
        </VitalsCard>
        <Avatar uri={avatarUri} size="l" bordered={bordered} borderColor={borderColor} />
      </Row>
    );
  },
);

HeaderUserInfo.displayName = 'HeaderUserInfo';
