import { createAction } from '@reduxjs/toolkit';
import { Subject } from 'models/Subject';
import { LoadError } from 'shared/interfaces/LoadError';
import { EntityObject } from 'shared/interfaces/EntityObject';

export abstract class SubjectsPageActions {
  public static readonly loadRequest = createAction('subjectsPage/LOAD_REQUEST');
  public static readonly loadSuccess = createAction<EntityObject<Subject>>('subjectsPage/LOAD_SUCCESS');
  public static readonly loadFailure = createAction<LoadError>('subjectsPage/LOAD_FAILURE');
}
