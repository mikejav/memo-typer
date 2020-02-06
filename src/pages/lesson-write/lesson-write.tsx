import React, { FC, useCallback } from 'react';
import { useParams } from 'react-router';
import { batch, useDispatch } from 'react-redux';
import { Load } from 'shared/components';
import { LessonWriteLoaded } from 'pages/lesson-write/lesson-write-loaded';
import { LessonWriteLoading } from 'pages/lesson-write/lesson-write-loading';
import { SubjectPageService } from 'state/pages/subject-page/subject-page.service';
import {
  useSubjectPagePhrasesSelector,
  useSubjectPageSubjectSelector
} from 'state/pages/subject-page/subject-page.selectors';

export const LessonWrite: FC = () => {
  const dispatch = useDispatch();
  const { lessonId } = useParams();
  // TODO: selektor!!
  const selectedLesson = useSubjectPageSubjectSelector();
  const selectedSubjectPhrases = useSubjectPagePhrasesSelector();

  const isLessonLoaded = selectedLesson?.id === lessonId;
  const arePhrasesLoaded = !!selectedSubjectPhrases;

  // TODO: można by się pokusić żeby to ogarnąć w ten sposób,
  //  że do Load komponentu przekazuje tablice tych rzeczy ewentualnie,
  //  i wtedy to by działalo jak taki Angularowy resolver,
  //  z tą różnicą że przechodziłby na podstrone od razu oczywiście,
  //  co jest lepiej rozwiązane IMO nie w Angularze
  const loadAction = useCallback(() => {
    batch(() => {
      if (!isLessonLoaded) {
        dispatch(SubjectPageService.loadSubject(lessonId!));
      }
      if (!arePhrasesLoaded) {
        dispatch(SubjectPageService.loadSubjectPhrases(lessonId!));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cancelLoading = useCallback(() => console.log('TODO: loadingcancelation method: WIn win win!!3'), []);

  return (
    <Load
      isLoaded={isLessonLoaded && arePhrasesLoaded}
      loadAction={loadAction}
      cancelLoading={cancelLoading}
      loadingComponent={<LessonWriteLoading/>}
      loadedComponent={<LessonWriteLoaded/>}
    />
  );
};
