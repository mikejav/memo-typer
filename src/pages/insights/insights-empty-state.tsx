import React, { FC } from 'react';
import {
  EmptyState,
  EmptyStateActions,
  EmptyStatePicture,
  EmptyStateTextPrimary,
  EmptyStateTextSecondary
} from 'shared/components/EmptyState';
import TimelineIcon from '@material-ui/icons/Timeline';
import { Button } from '@material-ui/core';


export const InsightsEmptyState: FC = () => {
  return (
    <EmptyState>
      <EmptyStatePicture>
        {/*TODO: zmienić picture na jakiś większy a nie taka mała ikona*/}
        <TimelineIcon/>
      </EmptyStatePicture>
      <EmptyStateTextPrimary>Empty insights</EmptyStateTextPrimary>
      <EmptyStateTextSecondary>
        You have no statistic data You have no statistic data You have no statistic data You have no statistic data.
        <br/>
        You have no statistic data You have no statistic data.
      </EmptyStateTextSecondary>
      <EmptyStateActions>
        <Button variant={'contained'} color={'primary'}>Primary action</Button>
        {/*TODO: secondary action eg link*/}
      </EmptyStateActions>
    </EmptyState>
  );
};
