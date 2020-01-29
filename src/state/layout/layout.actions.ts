import { createAction } from '@reduxjs/toolkit';

export abstract class LayoutActions {
  public static readonly openMobileSidenav = createAction('layout/OPEN_MOBILE_SIDENAV');
  public static readonly closeMobileSidenav = createAction('layout/CLOSE_MOBILE_SIDENAV');
  public static readonly toggleMobileSidenav = createAction('layout/TOGGLE_MOBILE_SIDENAV');
}
