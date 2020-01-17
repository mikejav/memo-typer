import React, { FC, useCallback, useEffect } from 'react';
import { Drawer } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { LayoutActions } from 'state/layout/layout.actions';
import { useLayoutSelector } from 'state/layout/layout.selectors';

export const LayoutSidenavMobile: FC = () => {
  const { isMobileSidenavOpen } = useLayoutSelector();
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeMenu = useCallback(() => dispatch(LayoutActions.closeMobileSidenav()), []);

  useEffect(() => () => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Drawer open={isMobileSidenavOpen} onClose={closeMenu}>
      sidenav Drawer mobile
    </Drawer>
  );
};
