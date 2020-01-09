import React, { Fragment } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { AccountCircle } from '@material-ui/icons';
import { AppBar, Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { RouterLink } from 'shared/components';


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


const Header: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Fragment>
      <AppBar position="static" elevation={0}>
        <Container maxWidth="md">
          <Toolbar variant="regular" disableGutters={true}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
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
            {renderMenu}
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>

    // {/*<AppBar position="sticky" elevation={0}>*/}
    // {/*  <Toolbar variant='regular'>*/}
    // {/*    <IconButton edge="start" color="inherit">*/}
    // {/*      <MenuIcon/>*/}
    // {/*    </IconButton>*/}
    // {/*    <Link component={RouterLink} to="/" color="inherit" underline="none">*/}
    // {/*      <Typography variant="h6">*/}
    // {/*        TODO:Logo*/}
    // {/*      </Typography>*/}
    // {/*    </Link>*/}
    // {/*    <IconButton color="inherit">*/}
    // {/*      <AccountCircle/>*/}
    // {/*    </IconButton>*/}
    // {/*  </Toolbar>*/}
    // {/*</AppBar>*/}

  );
};

export default Header;
