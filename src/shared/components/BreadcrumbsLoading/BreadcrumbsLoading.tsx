import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { times } from 'lodash';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginBottom: '1rem'
    },
    part: {
      height: 24,
      '&:not(:first-child)': {
        marginLeft: theme.spacing(2)
      }
    }
  })
);

const partsWidthPercentage = [10, 20, 15, 10];

interface BreadcrumbsLoadingProps {
  partsNumber: 1 | 2 | 3 | 4;
}

export const BreadcrumbsLoading: FC<BreadcrumbsLoadingProps> = ({ partsNumber }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {times(partsNumber, i => (
        <Skeleton
          variant='text'
          key={i}
          width={`${partsWidthPercentage[i]}%`}
          className={classes.part}
        />
      ))}
    </div>
  );
};
