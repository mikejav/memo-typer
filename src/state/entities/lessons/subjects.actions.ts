import { createAction } from '@reduxjs/toolkit';
import { Subject } from 'models/Subject';

export abstract class SubjectsActions {
  public static readonly addSubject = createAction<Subject>('subjects/ADD_SUBJECT');
  public static readonly addSubjects = createAction<Array<Subject>>('subjects/ADD_SUBJECTS');
  public static readonly removeSubject = createAction<Subject['id']>('subjects/REMOVE_SUBJECT');
}
