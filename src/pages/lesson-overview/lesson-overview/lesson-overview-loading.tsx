import React, { FC, Fragment } from 'react';
import { BreadcrumbsLoading } from 'shared/components/BreadcrumbsLoading/BreadcrumbsLoading';
import { OverviewCardLoading } from 'pages/lesson-overview/lesson-overview/overview-card-loading';


export const LessonOverviewLoading: FC = () => {

  return (
    <Fragment>
      <BreadcrumbsLoading partsNumber={2}/>
      <OverviewCardLoading/>
    </Fragment>
  );
};
