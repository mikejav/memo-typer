import React, { FC, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { SelectedLessonEffects } from 'state/selectedLesson/selected-lesson.effects';
import { useDispatch } from 'react-redux';
import { Load } from 'shared/components';
import { LessonOverviewLoaded } from 'pages/lesson-overview/lesson-overview-loaded';
import { LessonOverviewLoading } from 'pages/lesson-overview/lesson-overview-loading';
import { useSelectedLessonDataSelector } from 'state/selectedLesson/selected-lesson.selectors';


export const LessonOverview: FC = () => {
  const dispatch = useDispatch();
  const { lessonId } = useParams();
  const selectedLessonDetails = useSelectedLessonDataSelector();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadAction = useCallback(() => dispatch(SelectedLessonEffects.loadSelectedLesson(lessonId!)), []);
  const cancelLoading = useCallback(() => console.log('TODO: loadingcancelation method: WIn win win!!2'), []);

  return (
    <Load
      isLoaded={selectedLessonDetails.id === lessonId}
      loadAction={loadAction}
      cancelLoading={cancelLoading}
      LoadingComponent={LessonOverviewLoading}
      LoadedComponent={LessonOverviewLoaded}
    />
  );
};
