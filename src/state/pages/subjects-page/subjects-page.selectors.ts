import { useSelector } from 'react-redux';
import { RootState } from 'state/rootReducer';
import { Subject } from 'models/Subject';

// TODO: użyć jakiś selector creator to improve performance
export const useSubjectsPageSubjectsSelector = () => useSelector((state: RootState) => {
  const subjectsPageSubjectsIds = state.pages.subjects.subjectsIds;
  const subjects = state.entities.subjects;

  const pageSubjectsSubjects: Subject[] = [];

  subjectsPageSubjectsIds.forEach(subjectsPageSubjectsId => {
    pageSubjectsSubjects.push(subjects[subjectsPageSubjectsId]);
  });

  return pageSubjectsSubjects;
});


export const useSubjectsPageMetaSelector = () => useSelector((state: RootState) => {
  return state.pages.subjects;
});
