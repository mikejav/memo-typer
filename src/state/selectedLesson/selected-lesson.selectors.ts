import { useSelector } from 'react-redux';
import { RootState } from 'state/rootReducer';

export const useSelectedLessonSelector = () => useSelector((state: RootState) => state.selectedLesson);
export const useSelectedLessonDataSelector = () => useSelector((state: RootState) => state.selectedLesson.data);
