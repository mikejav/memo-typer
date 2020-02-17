import { createReducer } from '@reduxjs/toolkit';
import { SubjectsActions } from 'state/entities/subjects/subjects.actions';
import { EntityObject } from 'shared/interfaces/EntityObject';
import { StoreSubject } from 'state/entities/subjects/store-subject.type';

const initialState: EntityObject<StoreSubject> = {};

export const subjectsReducer = createReducer(initialState,
  builder => builder

    .addCase(SubjectsActions.addSubject, (state, { payload }) => {
      state[payload.id] = payload;
    })

    .addCase(SubjectsActions.addSubjects, (state, { payload }) => {
      Object.keys(payload).forEach((subjectId) => {
        if (state[subjectId]) {
          return;
        }

        state[subjectId] = payload[subjectId];
      });
    })

    .addCase(SubjectsActions.pathSubject, (state, { payload }) => {
      Object.assign(state[payload.id], payload);
    })

    .addCase(SubjectsActions.removeSubject, (state, { payload }) => {
      delete state[payload];
    })
);
