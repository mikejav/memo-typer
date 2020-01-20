import React, { FC, Fragment } from 'react';
import { RouterLink } from 'shared/components';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { useSelectedLessonDataSelector } from 'state/selectedLesson/selected-lesson.selectors';
import { OverviewCard } from 'pages/lesson-overview/components/overview-card';
import { PhraseList } from 'pages/lesson-overview/components/phrase-list';


export const LessonOverviewLoaded: FC = () => {
  const selectedLessonDetails = useSelectedLessonDataSelector();

  return (
    <Fragment>
      {/*TODO: breadcrumbsy można ukrywać na mobilce*/}
      <Breadcrumbs>
        <Link color="inherit" component={RouterLink} to='/'>Home</Link>
        <Typography color="textPrimary">{selectedLessonDetails.name}</Typography>
      </Breadcrumbs>
      <OverviewCard lessonDetails={selectedLessonDetails}/>
      <PhraseList phrases={selectedLessonDetails.phrases}/>
    </Fragment>
  );
};
