import { ThunkResult } from 'state/ThunkResult';
import { FirebaseApp } from 'state/firebaseApp';
import { Subject } from 'models/Subject';
import { batch } from 'react-redux';
import { SubjectsActions } from 'state/entities/subjects/subjects.actions';
import { SubjectPageActions } from 'state/pages/subject-page/subject-page.actions';
import { PhrasesActions } from 'state/entities/phrases/phrases.actions';
import { Phrase } from 'models/Phrase';
import { EntityObject } from 'shared/interfaces/EntityObject';

export abstract class SubjectPageService {

  public static loadSubject = (subjectId: string): ThunkResult => (dispatch) => {
    dispatch(SubjectPageActions.loadSubjectRequest());

    FirebaseApp.firestore().collection('subjects').doc(subjectId).get().then(doc => {
      if (!doc.exists) {
        dispatch(SubjectPageActions.loadSubjectFailure('TODO: generic message resource not exists'));
        return;
      }

      const subject = doc.data() as Subject;
      subject['id'] = doc.id;

      batch(() => {
        dispatch(SubjectsActions.addSubject(subject));
        dispatch(SubjectPageActions.loadSubjectSuccess(subject));
      });
    });
  };

  public static loadSubjectPhrases = (subjectId: string): ThunkResult => (dispatch, getState) => {
    dispatch(SubjectPageActions.loadSubjectPhrasesRequest());

    FirebaseApp.firestore().collection('subjects').doc(subjectId).collection('phrases').get().then(querySnapshot => {
      let phrases: EntityObject<Phrase> = {};
      querySnapshot.forEach(result => {
        phrases[result.id] = Object.assign(result.data(), { id: result.id }) as Phrase;
      });
      console.log('phrases:', phrases);
      batch(() => {
        dispatch(PhrasesActions.addPhrases(phrases));
        dispatch(SubjectPageActions.loadSubjectPhrasesSuccess(phrases));
      });
    });
  };

}
