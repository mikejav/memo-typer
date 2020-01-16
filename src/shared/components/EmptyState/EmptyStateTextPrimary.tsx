import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

export const EmptyStateTextPrimary: FC = ({ children }) => {

  return (
    <Typography variant={'h5'}>{children}</Typography>
  );
};
