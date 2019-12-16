import { LessonBasic } from '../../models/LessonBasic';

export interface Lessons {
  isFetching: boolean;
  error: object | null;
  lessonsList: LessonBasic[];
}
