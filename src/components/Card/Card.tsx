import React, { FC } from 'react';
import styles from './Card.module.scss';

export const Card: FC = ({ children }) => {
  return <div className={styles.Card}>{children}</div>;
};
