import { ThunkResult } from 'state/ThunkResult';
import { SubjectsActions } from 'state/entities/subjects/subjects.actions';
import { FirebaseApp } from 'state/firebaseApp';
import { Subject } from 'models/Subject';
import { SubjectsPageActions } from 'state/pages/subjects-page/subjects-page.actions';
import { EntityObject } from 'shared/interfaces/EntityObject';
import { batch } from 'react-redux';


export abstract class SubjectsPageService {

  public static loadSubjects = (): ThunkResult => (dispatch) => {
    dispatch(SubjectsPageActions.loadRequest());

    // ajax.get(`/api/subjects.json`)
    //   .pipe(delay(1000))
    //   .subscribe(
    //     (res) => {
    //       dispatch(LessonsActions.loadSuccess(res.response));
    //     },
    //     (err) => {
    //       dispatch(LessonsActions.loadFailure(err.status));
    //     }
    //   );

    FirebaseApp.firestore().collection('subjects').limit(4).get().then(querySnapshot => {
      let lessons: EntityObject<Subject> = {};
      querySnapshot.forEach(result => {
        lessons[result.id] = Object.assign(result.data(), { id: result.id }) as Subject;
      });
      batch(() => {
        dispatch(SubjectsActions.addSubjects(lessons));
        dispatch(SubjectsPageActions.loadSuccess(lessons));
      });
    });
  };

  public static loadIfNeeded = (): ThunkResult => (dispatch, getState) => {
    const { pages: { subjects: { isFetching } } } = getState();

    if (isFetching) {
      return;
    }

    SubjectsPageService.loadSubjects()(dispatch, getState, undefined);
  };

}
