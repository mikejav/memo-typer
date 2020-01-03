import { createAction } from '@reduxjs/toolkit';
import { LessonBasic } from 'models/LessonBasic';

export abstract class LessonsActions {
  public static loadRequest = createAction('lessons/LOAD_REQUEST');
  public static loadSuccess = createAction<LessonBasic[]>('lessons/LOAD_SUCCESS');
  public static loadFailure = createAction('lessons/LOAD_FAILURE');
}
