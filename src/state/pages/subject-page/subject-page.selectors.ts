import { useSelector } from 'react-redux';
import { RootState } from 'state/rootReducer';
import { Phrase } from 'models/Phrase';

// TODO: użyć jakiś selector creator to improve performance
export const useSubjectPageSubjectSelector = () => useSelector((state: RootState) => {
  const subjectPageSubjectId = state.pages.subject.subjectId;
  const subjects = state.entities.subjects;

  return subjects[subjectPageSubjectId] || null;
});

export const useSubjectsPageMetaSelector = () => useSelector((state: RootState) => {
  return state.pages.subject;
});

export const useSubjectPagePhrasesSelector = () => useSelector((state: RootState) => {
  if (!state.pages.subject.phrasesIds) {
    return null;
  }

  const { phrases } = state.entities;

  console.log('subject-page.selectors:phrases', phrases);

  return state.pages.subject.phrasesIds.reduce((acc, phraseId) => {
    acc.push(phrases[phraseId]);
    return acc;
  }, [] as Phrase[]);
});
