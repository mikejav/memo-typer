import { createReducer } from '@reduxjs/toolkit';
import { Layout } from 'state/layout/Layout';
import { LayoutActions } from 'state/layout/layout.actions';

const initialState: Layout = {
  isMobileSidenavOpen: false,
};

export const layoutReducer = createReducer(initialState, {
  [LayoutActions.openMobileSidenav.type]: state => {
    state.isMobileSidenavOpen = true;
  },

  [LayoutActions.closeMobileSidenav.type]: (state) => {
    state.isMobileSidenavOpen = false;
  },

  [LayoutActions.toggleMobileSidenav.type]: (state) => {
    state.isMobileSidenavOpen = !state.isMobileSidenavOpen;
  }
});
