import React, { FC } from 'react';
import { Phrase } from 'models/Phrase';
import {
  Card,
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Theme
} from '@material-ui/core';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    termColumn: {
      width: '100%'
    },
    definitionColumn: {
      width: '100%'
    }
  })
);


interface PhraseListProps {
  phrases: Phrase[];
}


export const PhraseList: FC<PhraseListProps> = ({ phrases }) => {
  const classes = useStyles();

  return (
    <Card>
      <List disablePadding>
        {phrases.map((phrase) => (
          <ListItem divider key={phrase.id}>
            <ListItemText primary={phrase.term} className={classes.termColumn}/>
            <ListItemText primary={phrase.definition} className={classes.definitionColumn}/>
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <StarTwoToneIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
