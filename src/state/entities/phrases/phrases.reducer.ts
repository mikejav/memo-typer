import { createReducer } from '@reduxjs/toolkit';
import { PhrasesActions } from 'state/entities/phrases/phrases.actions';
import { EntityObject } from 'shared/interfaces/EntityObject';
import { Phrase } from 'models/Phrase';

const initialState: EntityObject<Phrase> = {};

export const phrasesReducer = createReducer(initialState, {
  [PhrasesActions.addPhrase.type]: (state, { payload }) => {
    state[payload.id] = payload;
  },

  [PhrasesActions.addPhrases.type]: (state, { payload }) => {
    Object.assign(state, payload);
  },

  [PhrasesActions.removePhrase.type]: (state, { payload }) => {
    delete state[payload];
  }
});
