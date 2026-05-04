import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Button } from '../Button';
import {
  Card,
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
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        accessibilityLabel={accessibilityLabel ?? `${examName} ${date} ${year}`}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start' }
        }
      >
        <YearText>{year}</YearText>
        <DateText>{date}</DateText>
        <ExamLink
          onPress={onExamPress}
          accessibilityRole={onExamPress ? 'link' : undefined}
          accessibilityLabel={onExamPress ? examName : undefined}
        >
          <ExamLinkText>{examName}</ExamLinkText>
        </ExamLink>
        <Button
          label={actionLabel}
          variant="contained"
          onPress={onActionPress}
          disabled={actionDisabled}
        />
      </Card>
    );
  },
);

ExamInfoCard.displayName = 'ExamInfoCard';
