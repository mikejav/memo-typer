import { SelectedLessonActions } from 'state/selectedLesson/selected-lesson.actions';
import { createReducer } from '@reduxjs/toolkit';
import { LessonDetails } from 'models/LessonDetails';
import { State } from 'shared/interfaces/State';

const initialState: State<LessonDetails> = {
  isFetching: false,
  error: null,
  lastFetchedAt: 0,
  data: {
    id: '',
    name: '',
    description: '',
    coverLink: '',
    phrases: []
  }
};

export const selectedLessonReducer = createReducer(initialState, {
  [SelectedLessonActions.loadRequest.type]: state => {
    state.isFetching = true;
  },

  [SelectedLessonActions.loadSuccess.type]: (state, { payload }) => {
    state.isFetching = false;
    state.lastFetchedAt = Date.now();
    state.data = payload;
  },

  [SelectedLessonActions.loadFailure.type]: state => {
    state.isFetching = false;
  }
});
