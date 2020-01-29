import { createAction } from '@reduxjs/toolkit';
import { LessonBasic } from 'models/LessonBasic';

export abstract class LessonsActions {
  public static readonly loadRequest = createAction('lessons/LOAD_REQUEST');
  public static readonly loadSuccess = createAction<{[id: string]: LessonBasic}>('lessons/LOAD_SUCCESS');
  public static readonly loadFailure = createAction('lessons/LOAD_FAILURE');
}
