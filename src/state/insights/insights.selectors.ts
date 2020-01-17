import { useSelector } from 'react-redux';
import { RootState } from 'state/rootReducer';

export const useInsightsSelector = () => useSelector((state: RootState) => state.insights);
