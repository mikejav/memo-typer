import React, { FC } from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    }
  })
);

export const EmptyStateTextPrimary: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant={'h5'} className={classes.root}>{children}</Typography>
  );
};
