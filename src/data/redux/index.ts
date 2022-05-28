import { configureStore, createSelector } from '@reduxjs/toolkit';
import { cryptoAPI } from './cryptoAPI';
import { dashboardReducer } from './dashboardSlice';
import { walletReducer } from './walletSlice';
import { chartReducer } from './chartSlice';
import { TWalletItem } from '../types';

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    wallet: walletReducer,
    chart: chartReducer,
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoAPI.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;

export const selectCurrencies = (state: TRootState) =>
  state.dashboard.availableCurrencies;
export const selectConverter = (state: TRootState) => state.dashboard.converter;
export const selectCoins = (state: TRootState) => state.dashboard.coins;

export const selectChart = (state: TRootState) => state.chart;

export const selectWallet = (state: TRootState) => state.wallet;
export const selectBalance = createSelector(
  [selectWallet],
  (walletItems: TWalletItem[]) =>
    walletItems.reduce(
      (accum: number, walletItem: TWalletItem) => accum + walletItem.value,
      0
    )
);

export default store;
