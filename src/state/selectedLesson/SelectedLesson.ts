import { LessonDetails } from 'models/LessonDetails';

export interface SelectedLesson {
  isFetching: boolean;
  lessonDetails: LessonDetails;
}
