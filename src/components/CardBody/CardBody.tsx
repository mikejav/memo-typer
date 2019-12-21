import React, { FC } from 'react';
import styles from 'components/CardBody/CardBody.module.scss';

export const CardBody: FC = ({ children }) => {
  return <div className={styles.CardBody}>{children}</div>;
};
