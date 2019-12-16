import { createAction } from '@reduxjs/toolkit';

export abstract class SelectedLessonActions {
  public static loadRequest = createAction('lessons/LOAD_REQUEST');
  public static loadSuccess = createAction('lessons/LOAD_SUCCESS');
  public static loadFailure = createAction('lessons/LOAD_FAILURE');
}
