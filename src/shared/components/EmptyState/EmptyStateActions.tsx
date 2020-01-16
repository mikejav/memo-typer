import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    }
  })
);

export const EmptyStateActions: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>{children}</div>
  );
};
