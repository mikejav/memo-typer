import { Phrase } from 'state/models/Phrase';

export interface LessonBasic {
  id: string;
  name: string;
  description: string;
  phrases: Phrase[],
}
