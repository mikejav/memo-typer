import React, { FC } from 'react';
import styles from './LayoutContent.module.scss';

export const LayoutContent: FC = ({ children }) => {
  return <div className={styles.LayoutContent}>{children}</div>;
};
