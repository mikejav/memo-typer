import { ThunkAction } from 'redux-thunk';
import { RootState } from 'state/rootReducer';

export type ThunkResult<R = void> = ThunkAction<R, RootState, undefined, any>;
