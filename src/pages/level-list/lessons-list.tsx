import React, { FC, useCallback } from 'react';
import { LessonsEffects } from 'state/lessons/lessons.effects';
import { useDispatch } from 'react-redux';
import { Load } from 'shared/components';
import { LessonsListLoaded } from 'pages/level-list/lessons-list-loaded';
import { LessonsListLoading } from 'pages/level-list/lessons-list-loading';
import { useLessonsSelector } from 'state/lessons/lessons.selectors';

export const LessonsList: FC = () => {
  const dispatch = useDispatch();
  const lessons = useLessonsSelector();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadAction = useCallback(() => dispatch(LessonsEffects.load()), []);
  const cancelLoading = useCallback(() => console.log('TODO: loadingcancelation method: WIn win win!!1'), []);

  return (
    <Load
      isLoaded={lessons.lastFetchedAt && lessons.data.length}
      // isLoadingErroed={lessons.error && lessons.data.length}
      loadAction={loadAction}
      cancelLoading={cancelLoading}
      LoadingComponent={LessonsListLoading}
      LoadedComponent={LessonsListLoaded}
      // FailureComponent={FailureComponent}
    />
  );
};
