import React, { FC, Fragment } from 'react';
import { BreadcrumbsLoading } from 'shared/components/BreadcrumbsLoading/BreadcrumbsLoading';
import { Box, Card, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 275,
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        minHeight: 135,
      }
    },
    media: {
      width: '100%',
      height: 140,
      backgroundColor: theme.palette.action.hover,
      [theme.breakpoints.up('sm')]: {
        width: 200,
        height: 'initial'
      }
    },
    detailsGroup: {
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column'
    }
  })
);

export const LessonOverviewLoading: FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <BreadcrumbsLoading partsNumber={2}/>
      <Card className={classes.card}>
        <Skeleton variant={'rect'} className={classes.media}/>
        <div className={classes.detailsGroup}>
          <Box p={2}>
            <Skeleton variant='text' width='30%' height={32}/>
            <Skeleton variant='text' width='70%'/>
          </Box>
        </div>
      </Card>
    </Fragment>
  );
};
