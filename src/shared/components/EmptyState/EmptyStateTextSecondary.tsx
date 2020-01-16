import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

export const EmptyStateTextSecondary: FC = ({ children }) => {

  return (
    <Typography variant={'body1'}>{children}</Typography>
  );
};
