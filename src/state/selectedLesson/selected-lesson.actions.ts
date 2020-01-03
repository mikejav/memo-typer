import { createAction } from '@reduxjs/toolkit';
import { LessonDetails } from 'models/LessonDetails';

export abstract class SelectedLessonActions {
  public static loadRequest = createAction('selectedLesson/LOAD_REQUEST');
  public static loadSuccess = createAction<LessonDetails>('selectedLesson/LOAD_SUCCESS');
  public static loadFailure = createAction('selectedLesson/LOAD_FAILURE');
}
