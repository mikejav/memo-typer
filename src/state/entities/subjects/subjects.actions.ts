import { createAction } from '@reduxjs/toolkit';
import { Subject } from 'models/Subject';
import { EntityObject } from 'shared/interfaces/EntityObject';

export abstract class SubjectsActions {
  public static readonly addSubject = createAction<Subject>('subjects-page/ADD_SUBJECT');
  public static readonly addSubjects = createAction<EntityObject<Subject>>('subjects-page/ADD_SUBJECTS');
  public static readonly removeSubject = createAction<Subject['id']>('subjects-page/REMOVE_SUBJECT');
}
