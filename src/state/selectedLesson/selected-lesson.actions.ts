import { createAction } from '@reduxjs/toolkit';
import { LessonDetails } from 'models/LessonDetails';

export abstract class SelectedLessonActions {
  public static readonly loadRequest = createAction('selectedLesson/LOAD_REQUEST');
  public static readonly loadSuccess = createAction<LessonDetails>('selectedLesson/LOAD_SUCCESS');
  public static readonly loadFailure = createAction('selectedLesson/LOAD_FAILURE');
}
