import { configureStore } from '@reduxjs/toolkit';
import { cryptoAPI } from './cryptoAPI';
import { currentReducer } from './currentSlice';
import { walletReducer } from './walletSlice';
import { chartReducer } from './chartSlice';

const index = configureStore({
  reducer: {
    current: currentReducer,
    wallet: walletReducer,
    chart: chartReducer,
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoAPI.middleware),
});

export type TRootState = ReturnType<typeof index.getState>;

export const selectCurrency = (state: TRootState) => state.current;
export const selectChart = (state: TRootState) => state.chart;

export default index;
