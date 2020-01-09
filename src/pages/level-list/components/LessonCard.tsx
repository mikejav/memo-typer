import React, { FC } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { LessonBasic } from 'models/LessonBasic';
import { CardActionArea, makeStyles } from '@material-ui/core';
import { RouterLink } from 'shared/components';

const useStyles = makeStyles({
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  actionArea: {
    flexGrow: 1,
  }
});

interface LessonCardProps {
  lesson: LessonBasic,
}

export const LessonCard: FC<LessonCardProps> = ({ lesson }) => {
  const classes = useStyles();

  return (
    <Card key={lesson.id} className={classes.card}>
      <CardActionArea component={RouterLink} to={`/lesson/${lesson.id}`} className={classes.actionArea}>
        {/* TODO: ten height w zależności od breakpointów: */}
        <CardMedia
          image={lesson.coverLink}
          title={lesson.name}
          style={{ height: '140px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {lesson.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {lesson.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={RouterLink} to={`/lesson/${lesson.id}/write`}>
          Pisz
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
