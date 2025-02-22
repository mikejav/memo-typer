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
      paddingTop: theme.spacing(2),
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  })
);

export const Layout: FC = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles();
  const isDownMediumDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <LayoutContainer>
      <LayoutHeader showSidenavHamburger={isDownMediumDevice}/>
      {isDownMediumDevice && <LayoutSidenavMobile/>}
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
