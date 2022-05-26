import { configureStore } from '@reduxjs/toolkit';
import { cryptoAPI } from './cryptoAPI';
import { currentReducer } from './currentSlice';

const index = configureStore({
  reducer: {
    current: currentReducer,
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoAPI.middleware),
});

export type TRootState = ReturnType<typeof index.getState>;

export const selectCurrency = (state: TRootState) => state.current;

export default index;
