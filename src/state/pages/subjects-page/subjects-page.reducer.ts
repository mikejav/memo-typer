import { createReducer } from '@reduxjs/toolkit';
import { SubjectsPageActions } from 'state/pages/subjects-page/subjects-page.actions';
import { LoadError } from 'shared/interfaces/LoadError';

interface SubjectsPageState {
  isFetching: boolean;
  currentPage: number;
  lastFetchedAt: number;
  error: LoadError | null;
  subjectsIds: string[];
}

const initialState: SubjectsPageState = {
  isFetching: false,
  currentPage: 0,
  lastFetchedAt: 0,
  error: null,
  subjectsIds: []
};

export const subjectsPageReducer = createReducer(initialState, {
  [SubjectsPageActions.loadRequest.type]: state => {
    state.isFetching = true;
  },

  [SubjectsPageActions.loadSuccess.type]: (state, { payload }) => {
    state.isFetching = false;
    state.lastFetchedAt = Date.now();
    state.subjectsIds = Object.keys(payload);
  },

  [SubjectsPageActions.loadFailure.type]: (state, { payload }) => {
    state.isFetching = false;
    state.error = payload;
  }
});
