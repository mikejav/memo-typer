import React, { FC, Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SelectedLessonEffects } from 'state/selectedLesson/selected-lesson.effects';
import { Container, createStyles, Theme } from '@material-ui/core';
import { useSelectedLessonSelector } from 'selectors';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import { RouterLink } from 'shared/components/RouterLink/RouterLink';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


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


export const LessonOverview: FC = () => {
  const { lessonId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SelectedLessonEffects.loadSelectedLesson(lessonId!));
  }, [lessonId]);

  const { lessonDetails, isFetching } = useSelectedLessonSelector();


  const classes = useStyles();

  return (
    <Container maxWidth="md">
      {isFetching ? (
        <div>Loading...</div>
      ) : (
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
                <Button size="small" color="primary" component={RouterLink} to={`/lesson/${lessonId}/write`}>
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
      )}
    </Container>
  );
};
