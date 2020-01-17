import React, { FC } from 'react';
import { Drawer } from '@material-ui/core';

export const LayoutSidenavDesktop: FC = () => {

  // TODO: ogarnąć ten komponent - maybe its useless
  if (!'') {
    return null;
  }

  return (
    <Drawer variant={'permanent'}>
      <div>layout sidenav desktop</div>
    </Drawer>
  );
};
