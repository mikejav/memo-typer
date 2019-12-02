import React, { FC } from 'react';
import styles from './Container.module.scss';

export const Container: FC = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
