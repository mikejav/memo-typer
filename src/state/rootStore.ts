import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

// export const rootStore = createStore(rootReducer);
export const rootStore = configureStore({
  reducer: rootReducer
});
