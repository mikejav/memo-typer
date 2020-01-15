import { State } from 'shared/interfaces/State';
import { Insights } from 'models/Insights';
import { createReducer } from '@reduxjs/toolkit';
import { InsightsActions } from 'state/insights/insights.actions';

const initialState: State<Insights> = {
  isFetching: false,
  lastFetchedAt: 0,
  error: null,
  data: {
    lastActivity: ''
  }
};

export const insightsReducer = createReducer(initialState, {
  [InsightsActions.loadRequest.type]: state => {
    state.isFetching = true;
  },

  [InsightsActions.loadSuccess.type]: (state, { payload }) => {
    state.isFetching = false;
    state.lastFetchedAt = Date.now();
    state.data = payload;
  },

  [InsightsActions.loadFailure.type]: state => {
    state.isFetching = false;
  }
});
