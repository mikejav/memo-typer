import React, { FC, useCallback, useEffect } from 'react';
import { Drawer } from '@material-ui/core';
import { useLayoutSelector } from 'selectors/layout';
import { useDispatch } from 'react-redux';
import { LayoutActions } from 'state/layout/layout.actions';

export const LayoutSidenavMobile: FC = () => {
  const { isMobileSidenavOpen } = useLayoutSelector();
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeMenu = useCallback(() => dispatch(LayoutActions.closeMobileSidenav()), []);

  useEffect(() => () => {
    closeMenu();
  }, []);

  return (
    <Drawer open={isMobileSidenavOpen} onClose={closeMenu}>
      sidenav Drawer mobile
    </Drawer>
  );
};
