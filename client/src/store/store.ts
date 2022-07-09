import {configureStore, combineReducers} from '@reduxjs/toolkit';
import themeSlice from './reducers/themeSlice';
import {coreApi} from '../services/coreApi';
import authSlice from './reducers/authSlice';

const rootReducer= combineReducers({
  themeSlice,
  authSlice,
  [coreApi.reducerPath]: coreApi.reducer
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(coreApi.middleware)
});

export type TypedDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
