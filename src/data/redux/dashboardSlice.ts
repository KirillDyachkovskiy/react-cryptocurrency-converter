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
      value: 10000,
      price: 1,
      dynamics: 0,
    },
    {
      symbol: 'btc',
      price: 1,
      dynamics: 0,
      value: 1,
    },
    {
      symbol: 'eth',
      value: 3,
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

type TSetFromSymbolPayload = {
  symbol: TSymbol;
};

type TSetFromValuePayload = {
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
    setBalance: (
      state: TDashboardState,
      { payload: { symbol: newSymbol } }: PayloadAction<TSetFromSymbolPayload>
    ) => {
      const newPrice =
        state.wallet.find(({ symbol }: TWalletItem) => symbol === newSymbol)
          ?.price || 1;

      state.balance.symbol = newSymbol;
      state.balance.price = newPrice;
    },
    setConverterSymbol: (
      state: TDashboardState,
      { payload: { symbol: newSymbol } }: PayloadAction<TSetFromSymbolPayload>
    ) => {
      const newPrice =
        state.wallet.find(({ symbol }: TWalletItem) => symbol === newSymbol)
          ?.price || 1;

      state.converter.symbol = newSymbol;
      state.converter.price = newPrice;
    },
    setConverterValue: (
      state: TDashboardState,
      { payload: { value } }: PayloadAction<TSetFromValuePayload>
    ) => {
      state.converter.value = value;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
