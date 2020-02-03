import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { SubjectCard } from 'pages/subjects-list/components/subject-card';
import { useSubjectsPageSubjectsSelector } from 'state/pages/subjects-page/subjects-page.selector';

export const SubjectsListLoaded: FC = () => {
  const lessons = useSubjectsPageSubjectsSelector();

  return (
    <Grid container spacing={2}>
      {lessons.map(lesson => (
        <Grid item style={{ display: 'flex' }} xs={12} sm={6} md={4} key={lesson.id}>
          <SubjectCard lesson={lesson}/>
        </Grid>
      ))}
    </Grid>
  );
};
