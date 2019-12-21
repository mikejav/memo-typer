import React, { FC } from 'react';
import classNames from 'classnames/bind';
import styles from 'components/Button/Button.module.scss';
import { useSpacingClassMemo } from 'shared/utils/outer-spacing';
import { OuterSpacing } from 'shared/utils/outer-spacing/OuterSpacing';

let cx = classNames.bind(styles);

interface CardProps {
  margin?: OuterSpacing;
}

export const Button: FC<CardProps> = ({ margin, children }) => {

  const margins = useSpacingClassMemo(margin);
  const classNames = cx('Button', margins);

  return <button className={classNames}>{children}</button>;
};
