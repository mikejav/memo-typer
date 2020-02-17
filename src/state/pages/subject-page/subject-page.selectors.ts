import { useSelector } from 'react-redux';
import { RootState } from 'state/rootReducer';
import { Subject } from 'models/Subject';

// TODO: użyć jakiś selector creator to improve performance
export const useSubjectPageSubjectSelector = (): Subject | null => useSelector((state: RootState) => {
  const subjectPageSubjectId = state.pages.subject.subjectId;
  const subjects = state.entities.subjects;

  const selectedStoreSubject = subjects[subjectPageSubjectId] || null;
  const selectedSubject = Object.assign({}, selectedStoreSubject) as Subject;

  if (selectedStoreSubject?.phrases) {
    selectedSubject.phrases = selectedStoreSubject.phrases.map((phraseId) => {
      return state.entities.phrases[phraseId];
    });
  }

  return selectedSubject;
});

export const useSubjectsPageMetaSelector = () => useSelector((state: RootState) => {
  return state.pages.subject;
});
