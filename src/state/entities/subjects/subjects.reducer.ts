import { createReducer } from '@reduxjs/toolkit';
import { SubjectsActions } from 'state/entities/subjects/subjects.actions';
import { Subject } from 'models/Subject';
import { EntityObject } from 'shared/interfaces/EntityObject';

const initialState: EntityObject<Subject> = {};

export const subjectsReducer = createReducer(initialState,
  builder => builder

    .addCase(SubjectsActions.addSubject, (state, { payload }) => {
      state[payload.id] = payload;
    })

    .addCase(SubjectsActions.addSubjects, (state, { payload }) => {
      // if payload were array:
      // const initialAcc = {} as EntityObject<Subject>;
      // const newSubjects = payload.reduce((acc, currentSubject) => {
      //   acc['currentSubject.id'] = currentSubject;
      //   return acc;
      // }, initialAcc);

      Object.assign(state, payload);
    })

    .addCase(SubjectsActions.removeSubject, (state, { payload }) => {
      delete state[payload];
    })
);
