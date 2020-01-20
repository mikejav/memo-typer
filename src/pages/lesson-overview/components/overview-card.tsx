import React, { FC } from 'react';
import { Button, Card, CardActions, CardHeader, CardMedia, createStyles, IconButton, Theme } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { RouterLink } from 'shared/components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { LessonDetails } from 'models/LessonDetails';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    overviewCard: {
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

interface OverviewCardProps {
  lessonDetails: LessonDetails;
}

export const OverviewCard: FC<OverviewCardProps> = ({ lessonDetails }) => {
  const classes = useStyles();

  return (
    <Card className={classes.overviewCard}>
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
          <Button
            size="small"
            color="primary"
            component={RouterLink}
            to={`/lesson/${lessonDetails.id}/write`}
          >
            Pisz
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
