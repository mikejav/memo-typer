import { useSelector } from 'react-redux';
import { RootState } from 'state/rootReducer';

export const useLayoutSelector = () => useSelector((state: RootState) => state.layout);
