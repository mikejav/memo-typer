import React, { FC } from 'react';
import {
  Avatar,
  createStyles,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Popover,
  Theme
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { RouterLink } from 'shared/components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profileAvatar: {
      marginRight: 8
    }
  })
);

interface LayoutMenuProps {
  isMenuOpen: boolean;
  anchorEl: HTMLElement | null;
  onMenuClose: () => void;
}

export const LayoutMenu: FC<LayoutMenuProps> = ({ isMenuOpen, anchorEl, onMenuClose }) => {
  const classes = useStyles();

  return (
    <Popover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      anchorEl={anchorEl}
      onClose={onMenuClose}
    >
      <List>
        <ListItem button component={RouterLink} to={'/account'}>
          <Avatar className={classes.profileAvatar}>MJ</Avatar>
          <ListItemText primary={'Profil'} secondary={'michal.jaworski@example.com'}/>
        </ListItem>
        {/*<LayoutMenuAccountHeader/>*/}
      </List>
      <Divider/>
      <List>
        <ListItem button>
          <ListItemIcon><InboxIcon/></ListItemIcon>
          <ListItemText primary={'Ulubione'}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><InboxIcon/></ListItemIcon>
          <ListItemText primary={'Statystyki'}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><InboxIcon/></ListItemIcon>
          <ListItemText primary={'Historia aktywności'}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><InboxIcon/></ListItemIcon>
          <ListItemText primary={'Wyloguj się'}/>
        </ListItem>
      </List>
    </Popover>

  );
};
