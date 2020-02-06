import { combineReducers } from 'redux';
import { subjectsReducer } from 'state/entities/subjects/subjects.reducer';
import { layoutReducer } from 'state/layout/layout.reducer';
import { insightsReducer } from 'state/insights/insights.reducer';
import { subjectsPageReducer } from 'state/pages/subjects-page/subjects-page.reducer';
import { selectedLessonReducer } from 'state/selectedLesson/selected-lesson.reducer';
import { subjectPageReducer } from 'state/pages/subject-page/subject-page.reducer';
import { phrasesReducer } from 'state/entities/phrases/phrases.reducer';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  entities: combineReducers({
    subjects: subjectsReducer,
    phrases: phrasesReducer,
  }),
  pages: combineReducers({
    subjects: subjectsPageReducer,
    subject: subjectPageReducer,
  }),
  layout: layoutReducer,
  insights: insightsReducer,
});
