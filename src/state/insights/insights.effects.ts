import { ThunkResult } from 'state/ThunkResult';
import { InsightsActions } from 'state/insights/insights.actions';

export class InsightsEffects {
  public static load = (): ThunkResult => (dispatch) => {
    dispatch(InsightsActions.loadRequest());

    setTimeout(() => {
      dispatch(InsightsActions.loadSuccess({
        lastActivity: 'foobar'
      }));
    }, 500);
  };
}
