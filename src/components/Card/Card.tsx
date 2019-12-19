import React, { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import { useSpacingClassMemo } from 'shared/utils/outer-spacing';
import { OuterSpacing } from 'shared/utils/outer-spacing/OuterSpacing';

let cx = classNames.bind(styles);

interface CardProps {
  margin?: OuterSpacing;
}

export const Card: FC<CardProps> = ({ margin, children }) => {

  const margins = useSpacingClassMemo(margin);
  const classNames = cx('Card', margins);

  return <div className={classNames}>{children}</div>;
};
