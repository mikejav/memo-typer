import { createAction } from '@reduxjs/toolkit';

export abstract class LayoutActions {
  public static openMobileSidenav = createAction('layout/OPEN_MOBILE_SIDENAV');
  public static closeMobileSidenav = createAction('layout/CLOSE_MOBILE_SIDENAV');
  public static toggleMobileSidenav = createAction('layout/TOGGLE_MOBILE_SIDENAV');
}
