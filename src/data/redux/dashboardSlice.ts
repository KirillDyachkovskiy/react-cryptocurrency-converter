import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TBalance, TConverter, TSymbol, TWalletItem } from '../types';

type TDashboardState = {
  balance: TBalance;
  converter: TConverter;
  wallet: TWalletItem[];
};

const initialState: TDashboardState = {
  balance: {
    symbol: 'usd',
    price: 1,
  },
  converter: {
    symbol: 'usd',
    price: 1,
    value: 100,
  },
  wallet: [
    {
      symbol: 'usd',
      count: 10000,
      price: 1,
      dynamics: 0,
    },
    {
      symbol: 'btc',
      count: 1,
      price: 1,
      dynamics: 0,
    },
    {
      symbol: 'eth',
      count: 3,
      price: 1,
      dynamics: 0,
    },
  ],
};

type TSetDataPayload = {
  symbol: TSymbol;
  price: number;
  dynamics: number;
};

type TSetAccountValuePayload = {
  symbol: TSymbol;
  count: number;
};

type TBalanceSymbolPayload = {
  symbol: TSymbol;
};

type TConverterSymbolPayload = {
  symbol: TSymbol;
};

type TSetConverterValuePayload = {
  value: number;
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setData: (
      state: TDashboardState,
      { payload: { symbol, price, dynamics } }: PayloadAction<TSetDataPayload>
    ) => {
      state.wallet.forEach((walletItem: TWalletItem) => {
        if (walletItem.symbol === symbol) {
          walletItem.price = price;
          walletItem.dynamics = dynamics;
        }
      });
    },
    setBalanceSymbol: (
      state: TDashboardState,
      { payload: { symbol: newSymbol } }: PayloadAction<TBalanceSymbolPayload>
    ) => {
      const newPrice =
        state.wallet.find(({ symbol }: TWalletItem) => symbol === newSymbol)
          ?.price || 1;

      state.balance.symbol = newSymbol;
      state.balance.price = newPrice;
    },
    setAccountValue: (
      state: TDashboardState,
      {
        payload: { symbol: newSymbol, count: newCount },
      }: PayloadAction<TSetAccountValuePayload>
    ) => {
      const matchedAccount = state.wallet.find(
        ({ symbol }: TWalletItem) => symbol === newSymbol
      );

      if (matchedAccount) {
        matchedAccount.count = newCount;
      }
    },
    setConverterSymbol: (
      state: TDashboardState,
      { payload: { symbol: newSymbol } }: PayloadAction<TConverterSymbolPayload>
    ) => {
      const newPrice =
        state.wallet.find(({ symbol }: TWalletItem) => symbol === newSymbol)
          ?.price || 1;

      state.converter.symbol = newSymbol;
      state.converter.price = newPrice;
    },
    setConverterValue: (
      state: TDashboardState,
      { payload: { value } }: PayloadAction<TSetConverterValuePayload>
    ) => {
      state.converter.value = value;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
