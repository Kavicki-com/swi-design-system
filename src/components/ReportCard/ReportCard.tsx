import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Avatar } from '../Avatar';
import { StatusTag } from '../StatusTag';
import {
  AuthorBlock,
  AuthorName,
  AuthorRow,
  Card,
  FooterRow,
  LocationLabel,
  Section,
  SectionBody,
  SectionHeading,
  Title,
} from './ReportCard.styles';
import type { ReportCardProps } from './ReportCard.types';

export const ReportCard = forwardRef<View, ReportCardProps>(
  (
    {
      status,
      statusLabel,
      title,
      summary,
      summaryLabel = 'Resumo',
      creationDate,
      creationDateLabel = 'Data de criação',
      author,
      authorLabel = 'Autor',
      location,
      responsibles,
      responsiblesLabel = 'Responsáveis',
      onPress,
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        onPress={onPress}
        accessibilityRole={onPress ? 'button' : undefined}
        accessibilityLabel={accessibilityLabel ?? title}
        testID={testID}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 270 }
        }
      >
        <StatusTag status={status} label={statusLabel} />
        <Title>{title}</Title>

        <Section>
          <SectionHeading>{summaryLabel}</SectionHeading>
          <SectionBody>{summary}</SectionBody>
        </Section>

        <Section>
          <SectionHeading>{creationDateLabel}</SectionHeading>
          <SectionBody>{creationDate}</SectionBody>
        </Section>

        <FooterRow>
          <AuthorBlock>
            <SectionHeading>{authorLabel}</SectionHeading>
            <AuthorRow>
              <Avatar uri={author.avatarUri} size="m" />
              <AuthorName numberOfLines={2}>{author.name}</AuthorName>
            </AuthorRow>
          </AuthorBlock>
          {location ? <LocationLabel>{location}</LocationLabel> : null}
        </FooterRow>

        {responsibles ? (
          <Section>
            <SectionHeading>{responsiblesLabel}</SectionHeading>
            <SectionBody numberOfLines={1}>{responsibles}</SectionBody>
          </Section>
        ) : null}
      </Card>
    );
  },
);

ReportCard.displayName = 'ReportCard';
