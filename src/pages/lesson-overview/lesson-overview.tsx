import React, { FC, Fragment, useCallback } from 'react';
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
import { PhrasesListLoading } from 'pages/lesson-overview/subject-phrases/phrases-list-loading';
import { PhraseList } from 'pages/lesson-overview/subject-phrases/phrase-list';


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
        loadingComponent={<LessonOverviewLoading/>}
        loadedComponent={<LessonOverviewLoaded/>}
      />
      <Load
        isLoaded={selectedSubjectPhrases}
        loadAction={loadSubjectPhrasesCallback}
        cancelLoading={cancelSubjectPhrasesLoadingCallback}
        loadingComponent={<PhrasesListLoading/>}
        loadedComponent={<PhraseList phrases={selectedSubjectPhrases!}/>}
      />
    </Fragment>
  );
};
