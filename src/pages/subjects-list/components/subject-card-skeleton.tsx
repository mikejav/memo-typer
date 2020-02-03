import React, { FC } from 'react';
import { Box, Card, CardContent, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    media: {
      height: 140
    },
    cardContent: {
      flexGrow: 1,
      height: 140
    }
  })
);

export const SubjectCardSkeleton: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Skeleton variant={'rect'} className={classes.media}/>
      <CardContent className={classes.cardContent}>
        <Box pt={0.5}>
          <Skeleton width="60%"/>
          <Skeleton/>
        </Box>
      </CardContent>
    </Card>
  );
};
