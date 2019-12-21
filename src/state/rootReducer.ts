import { combineReducers } from 'redux';
import { selectedLessonReducer } from 'state/selectedLesson/selected-lesson.reducer';
import { lessonsReducer } from 'state/lessons/lessons.reducer';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  lessons: lessonsReducer,
  selectedLesson: selectedLessonReducer
});


/*  

modele:

LessonBasic:
  id: string,
  name: string,
  description: string,

LessonDetails:
  id: string,
  name: string,
  description: string,
  phrases: [ // lista słówek / fraz
    {id: string, content: string}
  ]

 {
   lessons: [
      {
        id: string,
        name: string,
        description: string,
        phrases: [ // lista słówek / fraz
          {id: string, content: string}
        ]
      }
   ],

   progress: [
     good: number,
     bad: number,
   ]
 }
 */
