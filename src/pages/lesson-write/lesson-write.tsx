import React, { FC, useCallback } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { SelectedLessonEffects } from 'state/selectedLesson/selected-lesson.effects';
import { useSelectedLessonSelector } from 'selectors';
import { Load } from 'shared/components';
import { LessonWriteLoaded } from 'pages/lesson-write/lesson-write-loaded';
import { LessonWriteLoading } from 'pages/lesson-write/lesson-write-loading';

export const LessonWrite: FC = () => {
  const dispatch = useDispatch();
  const { lessonId } = useParams();
  const { lessonDetails } = useSelectedLessonSelector();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadAction = useCallback(() => dispatch(SelectedLessonEffects.loadSelectedLesson(lessonId!)), []);
  const cancelLoading = useCallback(() => console.log('TODO: loadingcancelation method: WIn win win!!3'), []);

  return (
    <Load
      isLoaded={lessonDetails.id === lessonId}
      loadAction={loadAction}
      cancelLoading={cancelLoading}
      LoadingComponent={LessonWriteLoading}
      LoadedComponent={LessonWriteLoaded}
    />
  );
};
