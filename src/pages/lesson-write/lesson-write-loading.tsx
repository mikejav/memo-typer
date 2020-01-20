import React, { FC, Fragment } from 'react';
import { BreadcrumbsLoading } from 'shared/components/BreadcrumbsLoading/BreadcrumbsLoading';
import Card from '@material-ui/core/Card';
import { CardContent, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      textAlign: 'center',
      minHeight: 220
    },
    loaderSkeleton: {
      height: 4,
    },
    textProgressSkeleton: {
      width: '5rem',
      display: 'inline-block',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    phraseSkeleton: {
      width: '8rem',
      height: 32,
      display: 'inline-block',
      marginBottom: theme.spacing(3)
    },
    inputSkeleton: {
      width: 242,
      height: 56,
      display: 'inline-block',
    }
  })
);

export const LessonWriteLoading: FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <BreadcrumbsLoading partsNumber={3}/>
      <Card className={classes.card}>
        <Skeleton variant={'rect'} className={classes.loaderSkeleton}/>
        <CardContent>
          <div>
            <Skeleton variant={'rect'} className={classes.textProgressSkeleton}/>
          </div>
          <div>
            <Skeleton variant={'rect'} className={classes.phraseSkeleton}/>
          </div>
          <div>
            <Skeleton variant={'rect'} className={classes.inputSkeleton}/>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
};
