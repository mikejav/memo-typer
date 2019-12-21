import React, { FC } from 'react';
import styles from 'components/CardHeader/CardHeader.module.scss';

export const CardHeader: FC = ({ children }) => {
  return <div className={styles.CardHeader}>{children}</div>;
};
