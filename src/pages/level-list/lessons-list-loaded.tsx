import React, { FC } from 'react';
import { useLessonsSelector } from 'selectors';
import Grid from '@material-ui/core/Grid';
import { LessonCard } from 'pages/level-list/components/lesson-card';

export const LessonsListLoaded: FC = () => {
  const lessons = useLessonsSelector();

  return (
    <Grid container spacing={2}>
      {lessons.data.map(lesson => (
        <Grid item style={{ display: 'flex' }} xs={12} sm={6} md={4} key={lesson.id}>
          <LessonCard lesson={lesson}/>
        </Grid>
      ))}
    </Grid>
  );
};
