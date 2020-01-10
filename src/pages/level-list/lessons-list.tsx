import React, { FC } from 'react';
import { useLessonsSelector } from 'selectors';
import { LessonsEffects } from 'state/lessons/lessons.effects';
import { useDispatch } from 'react-redux';
import { Load } from 'shared/components';
import { LessonsListLoaded } from 'pages/level-list/lessons-list-loaded';
import { LessonsListLoading } from 'pages/level-list/lessons-list-loading';

export const LessonsList: FC = () => {
  const dispatch = useDispatch();
  const lessons = useLessonsSelector();

  return (
    <Load
      isLoadedSupplier={() => lessons.lessonsList.length}
      loadAction={() => dispatch(LessonsEffects.load())}
      cancelLoading={() => console.log('TODO: loadingcancelation method: WIn win win!!1')}
      LoadingComponent={LessonsListLoading}
      LoadedComponent={LessonsListLoaded}
    />
  );
};
