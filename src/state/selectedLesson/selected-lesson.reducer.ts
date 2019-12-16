import { SelectedLesson } from 'state/selectedLesson/SelectedLesson';
import { SelectedLessonActions } from 'state/selectedLesson/selected-lesson.actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState: SelectedLesson = {
  isFetching: false,
  lessonDetails: {
    id: '',
    name: '',
    description: '',
    phrases: []
  }
};

export const selectedLessonReducer = createReducer(initialState, {
  [SelectedLessonActions.loadRequest.type]: state => {
    state.isFetching = true;
  },

  [SelectedLessonActions.loadSuccess.type]: (state, { payload }) => {
    state.isFetching = false;
    state.lessonDetails = payload;
  },

  [SelectedLessonActions.loadFailure.type]: state => {
    state.isFetching = false;
  }
});
