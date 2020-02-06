import React, { FC, Fragment, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Load } from 'shared/components';
import { LessonOverviewLoaded } from 'pages/lesson-overview/lesson-overview/lesson-overview-loaded';
import { LessonOverviewLoading } from 'pages/lesson-overview/lesson-overview/lesson-overview-loading';
import {
  useSubjectPagePhrasesSelector,
  useSubjectPageSubjectSelector
} from 'state/pages/subject-page/subject-page.selectors';
import { SubjectPageService } from 'state/pages/subject-page/subject-page.service';
import { SubjectPageActions } from 'state/pages/subject-page/subject-page.actions';
import { SubjectPhrasesLoading } from 'pages/lesson-overview/subject-phrases/subject-phrases-loading';
import { SubjectPhrasesLoaded } from 'pages/lesson-overview/subject-phrases/subject-phrases-loaded';


export const LessonOverview: FC = () => {
  const dispatch = useDispatch();
  // TODO: zmiana nazyw i w routingu też
  const { lessonId: subjectId } = useParams();
  const selectedSubject = useSubjectPageSubjectSelector();
  const selectedSubjectPhrases = useSubjectPagePhrasesSelector();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadSubjectCallback = useCallback(() => dispatch(SubjectPageService.loadSubject(subjectId!)), []);
  const cancelSubjectLoadingCallback = useCallback(() => console.log('TODO: loadingcancelation method: WIn win win!!2'), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadSubjectPhrasesCallback = useCallback(() => dispatch(SubjectPageService.loadSubjectPhrases(subjectId!)), []);
  const cancelSubjectPhrasesLoadingCallback = useCallback(() => console.log('TODO: loadingcancelation method: WIn win win!!22'), []);

  return (
    <Fragment>
      <Load
        isLoaded={selectedSubject?.id === subjectId}
        loadAction={loadSubjectCallback}
        cancelLoading={cancelSubjectLoadingCallback}
        LoadingComponent={LessonOverviewLoading}
        LoadedComponent={LessonOverviewLoaded}
      />
      <Load
        isLoaded={selectedSubjectPhrases}
        loadAction={loadSubjectPhrasesCallback}
        cancelLoading={cancelSubjectPhrasesLoadingCallback}
        LoadingComponent={SubjectPhrasesLoading}
        LoadedComponent={SubjectPhrasesLoaded}
      />
    </Fragment>
  );
};
