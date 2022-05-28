import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCoin, TSymbol } from '../types';
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

type TToItem = {
  symbol: TSymbol;
  multiplier: number;
};

type TDashboardState = {
  coins: TCoin[];
  availableCurrencies: TSymbol[];
  converter: {
    from: {
      symbol: TSymbol;
      value: number;
    };
    to: TToItem[];
  };
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
  converter: {
    from: {
      symbol: 'usd',
      value: 100,
    },
    to: [
      {
        symbol: 'btc',
        multiplier: 1,
      },
      {
        symbol: 'eth',
        multiplier: 1,
      },
    ],
  },
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

      state.converter.to.forEach((toItem: TToItem) => {
        if (toItem.symbol === symbol) {
          toItem.multiplier = 1 / price;
        }
      });
    },
    setFromSymbol: (
      state: TDashboardState,
      { payload: { symbol: newSymbol } }: PayloadAction<TSetFromSymbolPayload>
    ) => {
      const availableSymbols = state.availableCurrencies.filter(
        (symbol: TSymbol) => symbol !== newSymbol
      );

      state.converter.from.symbol = newSymbol;

      const fromPriceInUSD =
        state.coins.find((coin: TCoin) => coin.symbol === newSymbol)?.price ||
        1;

      state.converter.to = availableSymbols.map((symbol: TSymbol) => {
        const toPriceInUSD =
          state.coins.find((coin: TCoin) => coin.symbol === symbol)?.price || 1;

        return {
          symbol,
          multiplier: getMultiplier(fromPriceInUSD, toPriceInUSD),
        };
      });
    },
    setFromValue: (
      state: TDashboardState,
      { payload: { value } }: PayloadAction<TSetFromValuePayload>
    ) => {
      state.converter.from.value = value;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
