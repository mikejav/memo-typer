import { createAction } from '@reduxjs/toolkit';
import { EntityObject } from 'shared/interfaces/EntityObject';
import { Phrase } from 'models/Phrase';

export abstract class PhrasesActions {
  public static readonly addPhrase = createAction<Phrase>('subjects-page/ADD_PHRASE');
  public static readonly addPhrases = createAction<EntityObject<Phrase>>('subjects-page/ADD_PHRASES');
  public static readonly removePhrase = createAction<Phrase['id']>('subjects-page/REMOVE_PHRASE');
}
