import React, { FC } from 'react';
import styles from './LayoutWrapper.module.scss';

export const LayoutWrapper: FC = ({ children }) => {
  return <div>{children}</div>;
};
