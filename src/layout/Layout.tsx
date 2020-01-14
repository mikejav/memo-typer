import React, { FC } from 'react';
import { LayoutHeader } from 'layout/LayoutHeader';
import { LayoutSidenavMobile } from 'layout/LayoutSidenavMobile';
import { LayoutMain } from 'layout/LayoutMain';
import { LayoutSidenavDesktop } from 'layout/LayoutSidenavDesktop';
import { LayoutMainContent } from 'layout/LayoutMainContent';
import { LayoutContainer } from 'layout/LayoutContainer';
import { Container, createStyles, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: '1rem',
      flexGrow: 1
    }
  })
);

export const Layout: FC = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles();
  const isDownSmallDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <LayoutContainer>
      <LayoutHeader/>
      {isDownSmallDevice && <LayoutSidenavMobile/>}
      <LayoutMain>
        <LayoutSidenavDesktop/>
        <LayoutMainContent>
          <Container maxWidth="md" className={classes.container}>
            {children}
          </Container>
        </LayoutMainContent>
      </LayoutMain>
    </LayoutContainer>
  );
};
