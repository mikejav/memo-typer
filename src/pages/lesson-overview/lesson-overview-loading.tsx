import React, { FC, Fragment } from 'react';
import { BreadcrumbsLoading } from 'shared/components/BreadcrumbsLoading/BreadcrumbsLoading';
import { OverviewCardLoading } from 'pages/lesson-overview/components/overview-card-loading';
import { PhraseListLoading } from 'pages/lesson-overview/components/phrase-list-loading';


export const LessonOverviewLoading: FC = () => {

  return (
    <Fragment>
      <BreadcrumbsLoading partsNumber={2}/>
      <OverviewCardLoading/>
      <PhraseListLoading/>
    </Fragment>
  );
};
