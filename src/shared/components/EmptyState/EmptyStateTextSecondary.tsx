import React, { FC } from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(1),
    }
  })
);

export const EmptyStateTextSecondary: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant={'body1'} className={classes.root}>{children}</Typography>
  );
};
