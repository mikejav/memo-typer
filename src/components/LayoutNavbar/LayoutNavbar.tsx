import React, { FC } from 'react';
import styles from './LayoutNavbar.module.scss';

export const LayoutNavbar: FC = ({ children }) => {
  return <div className={styles.layoutNavbar}>{children}</div>;
};
