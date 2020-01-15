import React, { FC, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { SelectedLessonEffects } from 'state/selectedLesson/selected-lesson.effects';
import { useSelectedLessonSelector } from 'selectors';
import { useDispatch } from 'react-redux';
import { Load } from 'shared/components';
import { LessonOverviewLoaded } from 'pages/lesson-overview/lesson-overview-loaded';
import { LessonOverviewLoading } from 'pages/lesson-overview/lesson-overview-loading';


export const LessonOverview: FC = () => {
  const dispatch = useDispatch();
  const { lessonId } = useParams();
  const selectedLesson = useSelectedLessonSelector();
  // TODO: maybe dodać selector do tego?
  const lessonDetails = selectedLesson.data;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadAction = useCallback(() => dispatch(SelectedLessonEffects.loadSelectedLesson(lessonId!)), []);
  const cancelLoading = useCallback(() => console.log('TODO: loadingcancelation method: WIn win win!!2'), []);

  return (
    <Load
      isLoaded={lessonDetails.id === lessonId}
      loadAction={loadAction}
      cancelLoading={cancelLoading}
      LoadingComponent={LessonOverviewLoading}
      LoadedComponent={LessonOverviewLoaded}
    />
  );
};
