import { useSelector } from 'react-redux';
import { RootState } from 'state/rootReducer';

export const useLessonsSelector = () => useSelector((state: RootState) => state.lessons);
export const useSelectedLessonSelector = () => useSelector((state: RootState) => state.selectedLesson);
