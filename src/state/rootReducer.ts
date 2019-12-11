import { LessonBasic } from './models/LessonBasic';
import { combineReducers } from 'redux';
import { lessons } from 'state/reducers/lessons';

interface RootState {
  lessons: LessonBasic[];
}

export const rootReducer = combineReducers<RootState>({
  lessons: lessons as any,
});
