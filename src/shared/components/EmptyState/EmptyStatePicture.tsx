import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    }
  })
);

export const EmptyStatePicture: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>{children}</div>
  );
};
