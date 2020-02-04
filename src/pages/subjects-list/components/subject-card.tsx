import React, { FC, useCallback } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Subject } from 'models/Subject';
import { CardActionArea, createStyles, makeStyles, Theme } from '@material-ui/core';
import { RouterLink } from 'shared/components';
import { useDispatch } from 'react-redux';
import { SubjectPageActions } from 'state/pages/subject-page/subject-page.actions';

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
      card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      actionArea: {
        flexGrow: 1
      },
      coverImage: {
        backgroundColor: theme.palette.action.hover,
        height: 140
      }
    });
  }
);

interface SubjectCardProps {
  subject: Subject,
}

export const SubjectCard: FC<SubjectCardProps> = ({ subject }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const setSelectedSubject = useCallback(() => {
    dispatch(SubjectPageActions.setSubjectId(subject.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject.id]);

  return (
    <Card className={classes.card}>
      <CardActionArea
        component={RouterLink}
        to={`/lesson/${subject.id}`}
        onClick={setSelectedSubject}
        className={classes.actionArea}
      >
        <CardMedia
          image={subject.coverLink}
          title={subject.name}
          className={classes.coverImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {subject.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {subject.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={RouterLink} to={`/lesson/${subject.id}/write`}>
          Pisz
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
