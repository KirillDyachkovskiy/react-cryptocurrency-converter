import { configureStore, createSelector } from '@reduxjs/toolkit';
import { TWalletItem } from '../types';
import { cryptoAPI } from './cryptoAPI';
import { dashboardReducer } from './dashboardSlice';
import { chartReducer } from './chartSlice';

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
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
export const selectWallet = (state: TRootState) => state.dashboard.wallet;
export const selectCoins = (state: TRootState) => state.dashboard.coins;

export const selectBalanceSymbol = (state: TRootState) =>
  state.dashboard.balanceSymbol;
export const selectBalance = createSelector(
  [selectWallet],
  (walletItems: TWalletItem[]) =>
    walletItems.reduce(
      (accum: number, walletItem: TWalletItem) =>
        accum + walletItem.value / walletItem.multiplier.balance,
      0
    )
);

export const selectChart = (state: TRootState) => state.chart;

export default store;
