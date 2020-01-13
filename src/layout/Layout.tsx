import React, { FC } from 'react';
import { LayoutHeader } from 'layout/LayoutHeader';
import { LayoutSidenavMobile } from 'layout/LayoutSidenavMobile';
import { LayoutMain } from 'layout/LayoutMain';
import { LayoutSidenavDesktop } from 'layout/LayoutSidenavDesktop';
import { LayoutMainContent } from 'layout/LayoutMainContent';
import { LayoutContainer } from 'layout/LayoutContainer';
import { Container, useMediaQuery, useTheme } from '@material-ui/core';

export const Layout: FC = ({ children }) => {
  const theme = useTheme();
  const isDownSmallDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <LayoutContainer>
      <LayoutHeader/>
      {isDownSmallDevice && <LayoutSidenavMobile/>}
      <LayoutMain>
        <LayoutSidenavDesktop/>
        <LayoutMainContent>
          <Container maxWidth="md" style={{ paddingTop: '1rem' }}>
            {children}
          </Container>
        </LayoutMainContent>
      </LayoutMain>
    </LayoutContainer>
  );
};
