import firebase from 'firebase/app';

export interface AddEntityResult {
  newResourceId: string;
  createdAt: firebase.firestore.Timestamp
}
