import { configureStore, createSelector } from '@reduxjs/toolkit';
import { TBalance, TBalanceItem, TWalletItem } from '../types';
import { cryptoAPI } from './cryptoAPI';
import { dashboardReducer } from './dashboardSlice';
import { chartReducer } from './chartSlice';
import sum from '../helpers/sum';

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
  (walletItems: TWalletItem[], { price: toPrice, symbol }: TBalance) => {
    const accounts = walletItems.map((currency: TWalletItem) => ({
      ...currency,
      balance: (currency.count / toPrice) * currency.price,
    }));

    const totalBalance = sum(
      accounts.map(({ balance }: TBalanceItem) => balance)
    );

    return {
      symbol,
      totalBalance,
      accounts,
    };
  }
);

export const selectChart = (state: TRootState) => state.chart;

export default store;
