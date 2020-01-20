import React, { FC, Fragment } from 'react';
import { RouterLink } from 'shared/components';
import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  createStyles,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Theme,
  Typography
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useSelectedLessonDataSelector } from 'state/selectedLesson/selected-lesson.selectors';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row'
      }
    },
    cover: {
      width: '100%',
      height: 140,
      backgroundColor: theme.palette.action.hover,
      [theme.breakpoints.up('sm')]: {
        width: 200,
        height: 'auto'
      }
    },
    detailsGroup: {
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column'
    }
  })
);

export const LessonOverviewLoaded: FC = () => {
  const selectedLessonDetails = useSelectedLessonDataSelector();
  const classes = useStyles();

  return (
    <Fragment>
      {/*TODO: breadcrumbsy można ukrywać na mobilce*/}
      <Breadcrumbs>
        <Link color="inherit" component={RouterLink} to='/'>Home</Link>
        <Typography color="textPrimary">{selectedLessonDetails.name}</Typography>
      </Breadcrumbs>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={selectedLessonDetails.coverLink}
          title="Live from space album cover"
        />
        <div className={classes.detailsGroup}>
          <CardHeader
            action={
              <IconButton>
                <MoreVertIcon/>
              </IconButton>
            }
            title={selectedLessonDetails.name}
            subheader={selectedLessonDetails.description}
          />
          <CardActions>
            <Button size="small" color="primary" component={RouterLink}
                    to={`/lesson/${selectedLessonDetails.id}/write`}>
              Pisz
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card>
        <List disablePadding>
          {selectedLessonDetails.phrases.map((phrase) => (
            <Fragment key={phrase.id}>
              <ListItem divider>
                <ListItemText primary={phrase.term} style={{ width: '0%' }}/>
                <ListItemText primary={phrase.definition} style={{ width: '0%' }}/>
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <StarTwoToneIcon/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Fragment>
          ))}
        </List>
      </Card>
    </Fragment>
  );
};
