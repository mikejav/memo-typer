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
import { useSelectedLessonSelector } from 'selectors';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      marginBottom: '0.75rem'
    },
    detailsGroup: {
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column'
    },
    cover: {
      width: 151
    }
  })
);

export const LessonOverviewLoaded: FC = () => {
  const { lessonDetails } = useSelectedLessonSelector();
  const classes = useStyles();

  return (
    <Fragment>
      <Breadcrumbs>
        <Link color="inherit" component={RouterLink} to='/'>Home</Link>
        <Typography color="textPrimary">{lessonDetails.name}</Typography>
      </Breadcrumbs>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={lessonDetails.coverLink}
          title="Live from space album cover"
        />
        <div className={classes.detailsGroup}>
          <CardHeader
            action={
              <IconButton>
                <MoreVertIcon/>
              </IconButton>
            }
            title={lessonDetails.name}
            subheader={lessonDetails.description}
          />
          <CardActions>
            <Button size="small" color="primary" component={RouterLink} to={`/lesson/${lessonDetails.id}/write`}>
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
          {lessonDetails.phrases.map((phrase) => (
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
