import React, { FC, useCallback } from 'react';
import { useLessonsSelector } from 'selectors';
import { LessonsEffects } from 'state/lessons/lessons.effects';
import { useDispatch } from 'react-redux';
import { Load } from 'shared/components';
import { LessonsListLoaded } from 'pages/level-list/lessons-list-loaded';
import { LessonsListLoading } from 'pages/level-list/lessons-list-loading';

export const LessonsList: FC = () => {
  const dispatch = useDispatch();
  const lessons = useLessonsSelector();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadAction = useCallback(() => dispatch(LessonsEffects.load()), []);
  const cancelLoading = useCallback(() => console.log('TODO: loadingcancelation method: WIn win win!!1'), []);

  return (
    <Load
      isLoaded={lessons.lessonsList.length}
      loadAction={loadAction}
      cancelLoading={cancelLoading}
      LoadingComponent={LessonsListLoading}
      LoadedComponent={LessonsListLoaded}
    />
  );
};
