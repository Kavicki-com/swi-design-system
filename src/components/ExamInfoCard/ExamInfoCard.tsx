import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { elevation } from '../../tokens';
import {
  Card,
  CompactActionButton,
  DateText,
  ExamLink,
  ExamLinkText,
  YearText,
} from './ExamInfoCard.styles';
import type { ExamInfoCardProps } from './ExamInfoCard.types';

export const ExamInfoCard = forwardRef<View, ExamInfoCardProps>(
  (
    {
      year,
      date,
      examName,
      onExamPress,
      actionLabel = 'Baixar exame',
      onActionPress,
      actionDisabled = false,
      fullWidth = false,
      compact = false,
      past = false,
      mobile = false,
      future = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        $compact={compact}
        $mobile={mobile}
        $past={past}
        accessibilityLabel={accessibilityLabel ?? `${examName} ${date} ${year}`}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start' }
        }
      >
        <YearText
          $past={past}
          $mobile={mobile}
          $future={future}
          numberOfLines={compact ? 1 : undefined}
        >
          {year}
        </YearText>
        <DateText
          $compact={compact}
          $mobile={mobile}
          $past={past}
          numberOfLines={compact ? 1 : undefined}
        >
          {date}
        </DateText>
        <ExamLink
          $compact={compact}
          onPress={onExamPress}
          accessibilityRole={onExamPress ? 'link' : undefined}
          accessibilityLabel={onExamPress ? examName : undefined}
        >
          <ExamLinkText
            $compact={compact}
            $past={past}
            numberOfLines={compact ? 1 : undefined}
            ellipsizeMode={compact ? 'tail' : undefined}
          >
            {examName}
          </ExamLinkText>
        </ExamLink>
        {compact ? (
          <CompactActionButton
            $mobile={mobile}
            onPress={actionDisabled ? undefined : onActionPress}
            disabled={actionDisabled}
            accessibilityRole="button"
            accessibilityLabel={actionLabel ?? `Baixar ${examName}`}
            accessibilityState={{ disabled: actionDisabled }}
            style={mobile && !actionDisabled ? elevation.lg : undefined}
          >
            <Icon name="download" size={16} color="#171717" />
          </CompactActionButton>
        ) : (
          <Button
            label={actionLabel}
            variant="contained"
            onPress={onActionPress}
            disabled={actionDisabled}
          />
        )}
      </Card>
    );
  },
);

ExamInfoCard.displayName = 'ExamInfoCard';
