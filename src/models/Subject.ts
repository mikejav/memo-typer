import { Phrase } from 'models/Phrase';
import firebase from 'firebase/app';

export interface Subject {
  id: string;
  name: string;
  description: string;
  coverLink: string;
  createdAt: firebase.firestore.Timestamp;
  phrases?: Phrase[];
}
