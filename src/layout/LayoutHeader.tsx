import React, { useCallback } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { AccountCircle } from '@material-ui/icons';
import {
  AppBar,
  Container,
  createStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Popover,
  Theme,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { RouterLink } from 'shared/components';
import { LayoutActions } from 'state/layout/layout.actions';
import { useDispatch } from 'react-redux';
import InboxIcon from '@material-ui/icons/MoveToInbox';


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
    },
  })
);


export const LayoutHeader: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isDownSmallDevice = useMediaQuery(theme.breakpoints.down('md'));
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = useCallback(() => dispatch(LayoutActions.toggleMobileSidenav()), []);

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="md">
        <Toolbar variant="regular" disableGutters={true}>
          {
            isDownSmallDevice &&
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

          <Popover
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isMenuOpen}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
          >
            <ListItem button dense>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Profil'} />
            </ListItem>
            <ListItem button dense>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Ulubione'} />
            </ListItem>
            <ListItem button dense>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Statystyki'} />
            </ListItem>
            <ListItem button dense>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Wyloguj się'} />
            </ListItem>
          </Popover>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
