import React, { FC } from 'react';
import {
  EmptyState,
  EmptyStateActionPrimary,
  EmptyStateActions,
  EmptyStateActionSecondary,
  EmptyStatePicture,
  EmptyStateTextPrimary,
  EmptyStateTextSecondary
} from 'shared/components/EmptyState';
import TimelineIcon from '@material-ui/icons/Timeline';
import { Button } from '@material-ui/core';


export const InsightsEmptyState: FC = () => {
  return (
    <EmptyState>
      <EmptyStatePicture><TimelineIcon/></EmptyStatePicture>
      <EmptyStateTextPrimary>Empty insights</EmptyStateTextPrimary>
      <EmptyStateTextSecondary>You have no statistic data</EmptyStateTextSecondary>
      <EmptyStateActions>
        <EmptyStateActionPrimary>
          <Button variant={'contained'} color={'primary'}>Primary action</Button>
        </EmptyStateActionPrimary>
        <EmptyStateActionSecondary>TODO: secondary action eg link</EmptyStateActionSecondary>
      </EmptyStateActions>
    </EmptyState>
  );
};
