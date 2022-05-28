import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCoin, TCoinIds, TSymbol } from '../types';
import { getMultiplier } from '../helpers';

type TSetDataPayload = {
  id: TCoinIds;
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

type TCurrenciesState = {
  coins: TCoin[];
  from: {
    symbol: TSymbol;
    value: number;
  };
  to: TToItem[];
};

const initialState: TCurrenciesState = {
  coins: [
    {
      id: 'bitcoin',
      symbol: 'btc',
      price: 1,
      dynamics: 0,
    },
    {
      id: 'ethereum',
      symbol: 'eth',
      price: 1,
      dynamics: 0,
    },
  ],
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
};

const currenciesSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    setData: (
      state: TCurrenciesState,
      { payload: { symbol, price, dynamics } }: PayloadAction<TSetDataPayload>
    ) => {
      state.coins.forEach((coin: TCoin) => {
        if (coin.symbol === symbol) {
          coin.price = price;
          coin.dynamics = dynamics;
        }
      });

      state.to.forEach((toItem: TToItem) => {
        if (toItem.symbol === symbol) {
          toItem.multiplier = 1 / price;
        }
      });
    },
    setFromSymbol: (
      state: TCurrenciesState,
      { payload: { symbol: newSymbol } }: PayloadAction<TSetFromSymbolPayload>
    ) => {
      const allSymbols: TSymbol[] = ['usd', 'btc', 'eth'];
      const availableSymbols = allSymbols.filter(
        (symbol: TSymbol) => symbol !== newSymbol
      );

      state.from.symbol = newSymbol;

      const fromPriceInUSD =
        state.coins.find((coin: TCoin) => coin.symbol === newSymbol)?.price ||
        1;

      state.to = availableSymbols.map((symbol: TSymbol) => {
        const toPriceInUSD =
          state.coins.find((coin: TCoin) => coin.symbol === symbol)?.price || 1;

        return {
          symbol,
          multiplier: getMultiplier(fromPriceInUSD, toPriceInUSD),
        };
      });
    },
    setFromValue: (
      state: TCurrenciesState,
      { payload: { value } }: PayloadAction<TSetFromValuePayload>
    ) => {
      state.from.value = value;
    },
  },
});

export const currenciesActions = currenciesSlice.actions;
export const currenciesReducer = currenciesSlice.reducer;
