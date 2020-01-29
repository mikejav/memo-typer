import { createAction } from '@reduxjs/toolkit';
import { Insights } from 'models/Insights';

export abstract class InsightsActions {
  public static readonly loadRequest = createAction('insights/LOAD_REQUEST');
  public static readonly loadSuccess = createAction<Insights>('insights/LOAD_SUCCESS');
  public static readonly loadFailure = createAction('insights/LOAD_FAILURE');
}
