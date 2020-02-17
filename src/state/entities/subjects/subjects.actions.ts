import { createAction } from '@reduxjs/toolkit';
import { EntityObject } from 'shared/interfaces/EntityObject';
import { StoreSubject } from 'state/entities/subjects/store-subject.type';

export abstract class SubjectsActions {
  public static readonly addSubject = createAction<StoreSubject>('subjects-page/ADD_SUBJECT');
  public static readonly addSubjects = createAction<EntityObject<StoreSubject>>('subjects-page/ADD_SUBJECTS');
  public static readonly pathSubject = createAction<Partial<StoreSubject> & Pick<StoreSubject, 'id'>>('subjects-page/PATH_SUBJECTS');
  public static readonly removeSubject = createAction<StoreSubject['id']>('subjects-page/REMOVE_SUBJECT');
}
