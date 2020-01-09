import React, { FC } from 'react';
import { useLessonsSelector } from 'selectors';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { LessonCard } from 'pages/level-list/components/LessonCard';

export const LessonsListLoaded: FC = () => {
  const lessons = useLessonsSelector();

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {console.log('ten widok powinien sie ulepic tylko raz')}
        {lessons.lessonsList.map(lesson => (
          <Grid item style={{ display: 'flex' }} xs={12} sm={6} md={4} key={lesson.id}>
            <LessonCard lesson={lesson}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
