import { ThunkResult } from 'state/ThunkResult';
import { SelectedLessonActions } from 'state/selectedLesson/selected-lesson.actions';
import { LessonDetails } from 'models/LessonDetails';

export abstract class SelectedLessonEffects {

  public static loadSelectedLesson = (lessonId: string): ThunkResult => (dispatch, getState) => {
    const { selectedLesson: { isFetching, data } } = getState();

    if (isFetching || lessonId === data.id) {
      return;
    }

    dispatch(SelectedLessonActions.loadRequest());

    const returnLessonDetails: LessonDetails = {
      id: lessonId,
      name: 'nazwa' + lessonId,
      description: 'dsc descr iption bgnb gds',
      coverLink: 'https://images.unsplash.com/photo-1577036441963-dff133afd025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=575&q=80',
      phrases: [
        {
          id: '1',
          term: 'różnica',
          definition: 'distinction'
        },{
          id: '2',
          term: 'odwrotność',
          definition: 'reciprocal'
        },{
          id: '3',
          term: 'czerpać, zaczerpnąć',
          definition: 'derive'
        },{
          id: '4',
          term: 'natomiast (spójnik)',
          definition: 'whereas'
        },
      ]
    };

    setTimeout(() => {
      dispatch(SelectedLessonActions.loadSuccess(returnLessonDetails));
    }, 500);

  };
}
