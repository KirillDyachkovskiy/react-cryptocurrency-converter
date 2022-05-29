import { configureStore, createSelector } from '@reduxjs/toolkit';
import { TBalance, TWalletItem } from '../types';
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

export const selectConverter = (state: TRootState) => state.dashboard.converter;

export const selectWallet = (state: TRootState) => state.dashboard.wallet;
export const selectCurrencies = (state: TRootState) =>
  state.dashboard.wallet.map(({ symbol }: TWalletItem) => symbol);

export const selectBalance = (state: TRootState) => state.dashboard.balance;
export const selectBalanceValue = createSelector(
  [selectWallet, selectBalance],
  (walletItems: TWalletItem[], { price: toPrice }: TBalance) =>
    walletItems.reduce(
      (accum: number, { value: fromValue, price: fromPrice }: TWalletItem) =>
        accum + (fromValue / toPrice) * fromPrice,
      0
    )
);

export const selectChart = (state: TRootState) => state.chart;

export default store;
