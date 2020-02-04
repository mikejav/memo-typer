import React, { FC, Fragment } from 'react';
import { RouterLink } from 'shared/components';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { OverviewCard } from 'pages/lesson-overview/subject-overview/overview-card';
import { useSubjectPageSubjectSelector } from 'state/pages/subject-page/subject-page.selectors';


export const LessonOverviewLoaded: FC = () => {
  const selectedLessonDetails = useSubjectPageSubjectSelector()!;

  return (
    <Fragment>
      {/*TODO: breadcrumbsy można ukrywać na mobilce*/}
      <Breadcrumbs>
        <Link color="inherit" component={RouterLink} to='/'>Home</Link>
        <Typography color="textPrimary">{selectedLessonDetails.name}</Typography>
      </Breadcrumbs>
      <OverviewCard lessonDetails={selectedLessonDetails}/>
    </Fragment>
  );
};
