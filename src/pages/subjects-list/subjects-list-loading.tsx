import React, { FC } from 'react';
import { SubjectCardSkeleton } from 'pages/subjects-list/components/subject-card-skeleton';
import Grid from '@material-ui/core/Grid';
import { times } from 'lodash';
import { useMediaQuery, useTheme } from '@material-ui/core';

export const SubjectsListLoading: FC = () => {
  const theme = useTheme();
  const isDownExtraSmallDevice = useMediaQuery(theme.breakpoints.down('xs'));
  const isDownSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumDevice = useMediaQuery(theme.breakpoints.down('md'));

  const numberOfCardSkeletons = (isDownExtraSmallDevice
      ? 2
      : isDownSmallDevice
        ? 4
        : isDownMediumDevice
          ? 6
          : 9
  );

  return (
    <Grid container spacing={2}>
      {times(numberOfCardSkeletons, (i => (
        <Grid item style={{ display: 'flex' }} xs={12} sm={6} md={4} key={i}>
          <SubjectCardSkeleton/>
        </Grid>
      )))}
    </Grid>
  );
};
