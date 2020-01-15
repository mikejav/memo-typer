import { createAction } from '@reduxjs/toolkit';
import { Insights } from 'models/Insights';

export abstract class InsightsActions {
  public static loadRequest = createAction('insights/LOAD_REQUEST');
  public static loadSuccess = createAction<Insights>('insights/LOAD_SUCCESS');
  public static loadFailure = createAction('insights/LOAD_FAILURE');
}
