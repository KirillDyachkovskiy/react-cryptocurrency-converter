import { configureStore } from '@reduxjs/toolkit';
import { cryptoAPI } from './cryptoAPI';
import { currenciesReducer } from './currenciesSlice';
import { walletReducer } from './walletSlice';
import { chartReducer } from './chartSlice';

const index = configureStore({
  reducer: {
    currencies: currenciesReducer,
    wallet: walletReducer,
    chart: chartReducer,
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoAPI.middleware),
});

export type TRootState = ReturnType<typeof index.getState>;

export const selectCurrencies = (state: TRootState) => state.currencies;
export const selectWallet = (state: TRootState) => state.wallet;
export const selectChart = (state: TRootState) => state.chart;

export default index;
