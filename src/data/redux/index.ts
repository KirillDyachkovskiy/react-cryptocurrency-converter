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

export const selectBalanceOptions = (state: TRootState) =>
  state.dashboard.balance;

export const selectBalance = createSelector(
  [selectWallet, selectBalanceOptions],
  (walletItems: TWalletItem[], balance: TBalance) => {
    const { price: toPrice, symbol } = balance;

    const totalBalance = walletItems.reduce(
      (accum: number, { count: fromCount, price: fromPrice }: TWalletItem) =>
        accum + (fromCount / toPrice) * fromPrice,
      0
    );

    return {
      symbol,
      totalBalance,
      accounts: walletItems,
    };
  }
);

export const selectChart = (state: TRootState) => state.chart;

export default store;
