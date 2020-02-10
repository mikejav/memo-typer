import { createReducer } from '@reduxjs/toolkit';
import { LoadError } from 'shared/interfaces/LoadError';
import { SubjectPageActions } from 'state/pages/subject-page/subject-page.actions';

interface SubjectPageState {
  isSubjectFetching: boolean;
  areSubjectPhrasesFetching: boolean;
  lastFetchedAt: number;
  error: LoadError | null;
  subjectId: number;
  phrasesIds: string[] | null;
}

const initialState: SubjectPageState = {
  isSubjectFetching: false,
  areSubjectPhrasesFetching: false,
  lastFetchedAt: 0,
  error: null,
  subjectId: 0,
  phrasesIds: null,
};

export const subjectPageReducer = createReducer(initialState, {
  [SubjectPageActions.setSubjectId.type]: (state, { payload }) => {
    state.subjectId = payload;
  },

  [SubjectPageActions.loadSubjectRequest.type]: state => {
    state.isSubjectFetching = true;
  },

  [SubjectPageActions.loadSubjectSuccess.type]: (state, { payload }) => {
    state.isSubjectFetching = false;
    state.error = null;
    state.subjectId = payload.id;
  },

  [SubjectPageActions.loadSubjectFailure.type]: (state, { payload }) => {
    state.isSubjectFetching = false;
    state.error = payload;
  },
  //
  [SubjectPageActions.loadSubjectPhrasesRequest.type]: state => {
    state.areSubjectPhrasesFetching = true;
  },

  [SubjectPageActions.loadSubjectPhrasesSuccess.type]: (state, { payload }) => {
    state.areSubjectPhrasesFetching = false;
    state.error = null;
    state.phrasesIds = Object.keys(payload);
  },

  [SubjectPageActions.loadSubjectPhrasesFailure.type]: (state, { payload }) => {
    state.areSubjectPhrasesFetching = false;
    state.error = payload;
  },
});
