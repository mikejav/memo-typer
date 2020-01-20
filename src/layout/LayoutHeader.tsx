import React, { FC, useCallback } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { AccountCircle } from '@material-ui/icons';
import { AppBar, Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { RouterLink } from 'shared/components';
import { LayoutActions } from 'state/layout/layout.actions';
import { useDispatch } from 'react-redux';
import { LayoutMenu } from 'layout/LayoutMenu';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    }
  })
);

interface LayoutHeaderProps {
  showSidenavHamburger: boolean;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({ showSidenavHamburger }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleMobileMenu = useCallback(() => dispatch(LayoutActions.toggleMobileSidenav()), []);

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="md">
        <Toolbar variant="regular" disableGutters={true}>
          {
            showSidenavHamburger &&
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={toggleMobileMenu}
            >
              <MenuIcon/>
            </IconButton>
          }
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <Typography variant="h6">
              TODO:Logo
            </Typography>
          </Link>
          <div className={classes.grow}/>
          <IconButton
            edge="end"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle/>
          </IconButton>
          <LayoutMenu isMenuOpen={isMenuOpen} onMenuClose={handleMenuClose} anchorEl={anchorEl}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
