import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1
    }
  })
);


export const LayoutMainContent: FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
