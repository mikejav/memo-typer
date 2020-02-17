import { createReducer } from '@reduxjs/toolkit';
import { LoadError } from 'shared/interfaces/LoadError';
import { SubjectPageActions } from 'state/pages/subject-page/subject-page.actions';

interface SubjectPageState {
  isSubjectFetching: boolean;
  lastFetchedAt: number;
  error: LoadError | null;
  subjectId: number;
}

const initialState: SubjectPageState = {
  isSubjectFetching: false,
  lastFetchedAt: 0,
  error: null,
  subjectId: 0,
};

export const subjectPageReducer = createReducer(initialState, {
  [SubjectPageActions.setSubjectId.type]: (state, { payload }) => {
    Object.assign(state, initialState, {subjectId: payload});
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
  },

  [SubjectPageActions.loadSubjectPhrasesSuccess.type]: (state, { payload }) => {
    state.error = null;
  },

  [SubjectPageActions.loadSubjectPhrasesFailure.type]: (state, { payload }) => {
    state.error = payload;
  },
});
