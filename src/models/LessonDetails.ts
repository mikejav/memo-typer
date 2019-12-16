import { Phrase } from 'models/Phrase';

export interface LessonDetails {
  id: string;
  name: string;
  description: string;
  phrases: Phrase[],
}
