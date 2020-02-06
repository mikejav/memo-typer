import React, { FC } from 'react';
import { Skeleton } from '@material-ui/lab';
import { Box, Card, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    overviewCard: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 275,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        minHeight: 135
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


export const OverviewCardLoading: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.overviewCard}>
      <Skeleton variant={'rect'} className={classes.media}/>
      <div className={classes.detailsGroup}>
        <Box p={2}>
          <Skeleton variant='text' width='30%' height={32}/>
          <Skeleton variant='text' width='70%'/>
        </Box>
      </div>
    </Card>
  );
};
