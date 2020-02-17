import { ajax } from 'rxjs/ajax';
import config from 'config';
import { Observable } from 'rxjs';
import { AddEntityResult } from 'shared/interfaces/AddEntityResult';
import { AddEntlitiesResult } from 'shared/interfaces/AddEntlitiesResult';
import { map } from 'rxjs/operators';
import { SubjectAdd } from 'models/SubjectAdd';
import { PhraseAdd } from 'models/PhraseAdd';
import firebase from 'firebase/app';

export abstract class SubjectsService {

  public static addSubject(addSubject: SubjectAdd): Observable<AddEntityResult> {
    return ajax.post(`${config.apiEndpoints.addSubjects}`, addSubject)
      .pipe(
        map(ajaxResponse => ajaxResponse.response),
        map(response => {
          response.createdAt = new firebase.firestore.Timestamp(
            response.createdAt.seconds,
            response.createdAt.nanoseconds
          );
          return response;
        })
      );
  }

  public static addSubjectPhrases(phrases: PhraseAdd[]): Observable<AddEntlitiesResult> {
    return ajax.post(`${config.apiEndpoints.addSubjectPhrases}`, phrases)
      .pipe(map(ajaxResponse => ajaxResponse.response));
  }
}
