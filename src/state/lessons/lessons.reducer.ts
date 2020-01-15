import { createReducer } from '@reduxjs/toolkit';
import { LessonsActions } from './lessons.actions';
import { StateLazyList } from 'shared/interfaces/StateLazyList';
import { LessonBasic } from 'models/LessonBasic';

const initialState: StateLazyList<LessonBasic> = {
  isFetching: false,
  error: null,
  lastFetchedAt: 0,
  isLastChunkLoaded: false,
  data: []
};

export const lessonsReducer = createReducer(initialState, {
  [LessonsActions.loadRequest.type]: state => {
    state.isFetching = true;
  },

  [LessonsActions.loadSuccess.type]: (state, { payload }) => {
    state.isFetching = false;
    state.lastFetchedAt = Date.now();
    state.data = payload;
  },

  [LessonsActions.loadFailure.type]: (state, { payload }) => {
    state.isFetching = false;
    state.error = payload;
  }
});
