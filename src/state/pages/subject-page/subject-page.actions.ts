import { createAction } from '@reduxjs/toolkit';
import { Subject } from 'models/Subject';
import { LoadError } from 'shared/interfaces/LoadError';
import { EntityObject } from 'shared/interfaces/EntityObject';
import { Phrase } from 'models/Phrase';

export abstract class SubjectPageActions {
  public static readonly setSubjectId = createAction<string>('subjectPage/SET_SELECTED_SUBJECT_ID');

  public static readonly loadSubjectRequest = createAction('subjectPage/LOAD_SUBJECT_REQUEST');
  public static readonly loadSubjectSuccess = createAction<Subject>('subjectPage/LOAD_SUBJECT_SUCCESS');
  public static readonly loadSubjectFailure = createAction<LoadError>('subjectPage/LOAD_SUBJECT_FAILURE');

  public static readonly loadSubjectPhrasesRequest = createAction('subjectPage/LOAD_SUBJECT_PHRASES_REQUEST');
  public static readonly loadSubjectPhrasesSuccess = createAction<EntityObject<Phrase>>('subjectPage/LOAD_SUBJECT_PHRASES_SUCCESS');
  public static readonly loadSubjectPhrasesFailure = createAction<LoadError>('subjectPage/LOAD_SUBJECT_PHRASES_FAILURE');
}
