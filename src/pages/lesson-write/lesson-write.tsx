import React, { FC } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { SelectedLessonEffects } from 'state/selectedLesson/selected-lesson.effects';
import { useSelectedLessonSelector } from 'selectors';
import { Load } from 'shared/components';
import { LessonWriteLoaded } from 'pages/lesson-write/lesson-write-loaded';
import { LessonWriteLoading } from 'pages/lesson-write/lesson-write-loading';

export const LessonWrite: FC = () => {
  const { lessonId } = useParams();
  const dispatch = useDispatch();

  const { lessonDetails } = useSelectedLessonSelector();

  return (
    <Load
      isLoadedSupplier={() => lessonDetails.id === lessonId}
      loadAction={() => dispatch(SelectedLessonEffects.loadSelectedLesson(lessonId!))}
      cancelLoading={() => console.log('TODO: loadingcancelation method: WIn win win!!3')}
      LoadingComponent={LessonWriteLoading}
      LoadedComponent={LessonWriteLoaded}
    />

  );
};
