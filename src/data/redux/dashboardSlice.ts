import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCoin, TSymbol, TWalletItem } from '../types';
import { getMultiplier } from '../helpers';

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

type TFromItem = {
  symbol: TSymbol;
  value: number;
};

type TDashboardState = {
  coins: TCoin[];
  availableCurrencies: TSymbol[];
  balanceSymbol: TSymbol;
  converter: TFromItem;
  wallet: TWalletItem[];
};

const initialState: TDashboardState = {
  coins: [
    {
      symbol: 'btc',
      price: 1,
      dynamics: 0,
    },
    {
      symbol: 'eth',
      price: 1,
      dynamics: 0,
    },
  ],
  availableCurrencies: ['btc', 'eth', 'usd'],
  balanceSymbol: 'usd',
  converter: {
    symbol: 'usd',
    value: 100,
  },
  wallet: [
    {
      symbol: 'usd',
      value: 10000,
      multiplier: {
        balance: 1,
        converter: 1,
      },
    },
    {
      symbol: 'btc',
      value: 1,
      multiplier: {
        balance: 1,
        converter: 1,
      },
    },
    {
      symbol: 'eth',
      value: 3,
      multiplier: {
        balance: 1,
        converter: 1,
      },
    },
  ],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setData: (
      state: TDashboardState,
      { payload: { symbol, price, dynamics } }: PayloadAction<TSetDataPayload>
    ) => {
      state.coins.forEach((coin: TCoin) => {
        if (coin.symbol === symbol) {
          coin.price = price;
          coin.dynamics = dynamics;
        }
      });

      state.wallet.forEach((walletItem: TWalletItem) => {
        if (walletItem.symbol === symbol) {
          walletItem.multiplier.balance = 1 / price;
          walletItem.multiplier.converter = 1 / price;
        }
      });
    },
    setBalanceSymbol: (
      state: TDashboardState,
      { payload: { symbol: newSymbol } }: PayloadAction<TSetFromSymbolPayload>
    ) => {
      state.balanceSymbol = newSymbol;

      const fromPriceInUSD =
        state.coins.find((coin: TCoin) => coin.symbol === newSymbol)?.price ||
        1;

      state.wallet = state.wallet.map((walletItem: TWalletItem) => {
        const toPriceInUSD =
          state.coins.find((coin: TCoin) => coin.symbol === walletItem.symbol)
            ?.price || 1;

        return {
          ...walletItem,
          multiplier: {
            ...walletItem.multiplier,
            balance: getMultiplier(fromPriceInUSD, toPriceInUSD),
          },
        };
      });
    },
    setFromSymbol: (
      state: TDashboardState,
      { payload: { symbol: newSymbol } }: PayloadAction<TSetFromSymbolPayload>
    ) => {
      state.converter.symbol = newSymbol;

      const fromPriceInUSD =
        state.coins.find((coin: TCoin) => coin.symbol === newSymbol)?.price ||
        1;

      state.wallet = state.wallet.map((walletItem: TWalletItem) => {
        const toPriceInUSD =
          state.coins.find((coin: TCoin) => coin.symbol === walletItem.symbol)
            ?.price || 1;

        return {
          ...walletItem,
          multiplier: {
            ...walletItem.multiplier,
            converter: getMultiplier(fromPriceInUSD, toPriceInUSD),
          },
        };
      });
    },
    setFromValue: (
      state: TDashboardState,
      { payload: { value } }: PayloadAction<TSetFromValuePayload>
    ) => {
      state.converter.value = value;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
