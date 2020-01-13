import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const LayoutContainer: FC = ({children}) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
