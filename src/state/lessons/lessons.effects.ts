import { LessonsActions } from './lessons.actions';
import { ajax } from 'rxjs/ajax';
import { delay } from 'rxjs/operators';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';

//TODO: wyeksportować to do jakichś sharów:
type ThunkResult<R = void> = ThunkAction<R, RootState, undefined, any>;

export class LessonsEffects {


  public static loadLessonsIfNeeded = (): ThunkResult => (dispatch, getState) => {
    const { lessons: { isFetching } } = getState();

    if (isFetching) {
      return;
    }

    dispatch(LessonsActions.loadRequest());

    ajax.get(`/api/lessons.json`)
      .pipe(delay(1000))
      .subscribe(
        (res) => {
          dispatch(LessonsActions.loadSuccess(res.response));
        },
        (err) => {
          dispatch(LessonsActions.loadFailure(err.status));
        }
      );
  };

}
