import { createReducer } from '@reduxjs/toolkit';
import { SubjectsActions } from 'state/entities/lessons/subjects.actions';
import { Subject } from 'models/Subject';

export type EntityObject<T> = {
  [key: string]: T
};

const initialState: EntityObject<Subject> = {};

export const subjectsReducer = createReducer(initialState,
  builder => builder

    .addCase(SubjectsActions.addSubject, (state, { payload }) => {
      state[payload.id] = payload;
    })

    .addCase(SubjectsActions.addSubjects, (state, { payload }) => {
      const initialAcc = {} as EntityObject<Subject>;

      const newSubjects = payload.reduce((acc, currentSubject) => {
        acc['currentSubject.id'] = currentSubject;
        return acc;
      }, initialAcc);

      Object.assign(state, newSubjects);
    })

    .addCase(SubjectsActions.removeSubject, (state, { payload }) => {
      delete state[payload];
    })
);
