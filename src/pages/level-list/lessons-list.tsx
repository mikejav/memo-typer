import React, { FC, useEffect } from 'react';
import { useLessonsSelector } from 'selectors';
import { Container } from '@material-ui/core';
import { LessonCard } from 'pages/level-list/components/LessonCard';
import Grid from '@material-ui/core/Grid';
import { LessonsEffects } from 'state/lessons/lessons.effects';
import { useDispatch } from 'react-redux';

export const LessonsList: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LessonsEffects.loadLessonsIfNeeded());
  }, []);

  const lessons = useLessonsSelector();

  return (
    <Container maxWidth="md">
      {lessons.isFetching ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={2}>
          {lessons.lessonsList.map(lesson => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={lesson.id}>
              <LessonCard lesson={lesson}/>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
  // return <div>level list</div>;
};
