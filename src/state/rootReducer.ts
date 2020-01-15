import { combineReducers } from 'redux';
import { selectedLessonReducer } from 'state/selectedLesson/selected-lesson.reducer';
import { lessonsReducer } from 'state/lessons/lessons.reducer';
import { layoutReducer } from 'state/layout/layout.reducer';
import { insightsReducer } from 'state/insights/insights.reducer';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  lessons: lessonsReducer,
  selectedLesson: selectedLessonReducer,
  layout: layoutReducer,
  insights: insightsReducer,
});
