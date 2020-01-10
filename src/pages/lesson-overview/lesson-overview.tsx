import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { SelectedLessonEffects } from 'state/selectedLesson/selected-lesson.effects';
import { useSelectedLessonSelector } from 'selectors';
import { useDispatch } from 'react-redux';
import { Load } from 'shared/components';
import { LessonOverviewLoaded } from 'pages/lesson-overview/lesson-overview-loaded';
import { LessonOverviewLoading } from 'pages/lesson-overview/lesson-overview-loading';


export const LessonOverview: FC = () => {
  const { lessonId } = useParams();
  const dispatch = useDispatch();
  const { lessonDetails } = useSelectedLessonSelector();

  return (
    <Load
      isLoadedSupplier={() => lessonDetails.id === lessonId}
      loadAction={() => dispatch(SelectedLessonEffects.loadSelectedLesson(lessonId!))}
      cancelLoading={() => console.log('TODO: loadingcancelation method: WIn win win!!2')}
      LoadingComponent={LessonOverviewLoading}
      LoadedComponent={LessonOverviewLoaded}
    />
  );
};
