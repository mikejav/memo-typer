import { createReducer } from '@reduxjs/toolkit';
import { LessonsActions } from './lessons.actions';
import { Lessons } from './Lessons';

const initialState: Lessons = {
  isFetching: false,
  error: null,
  lessonsList: []
};

export const lessonsReducer = createReducer(initialState, {
  [LessonsActions.loadRequest.type]: state => {
    state.isFetching = true;
  },

  [LessonsActions.loadSuccess.type]: (state, { payload }) => {
    state.isFetching = false;
    state.lessonsList = payload;
  },

  [LessonsActions.loadFailure.type]: (state, { payload }) => {
    state.isFetching = false;
    state.error = payload;
  }
});
