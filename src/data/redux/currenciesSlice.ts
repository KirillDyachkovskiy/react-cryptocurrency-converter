import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCoin, TCoinIds } from '../types';

type TSetDataPayload = {
  id: TCoinIds;
  price: number;
  dynamics: number;
};

type TCurrenciesState = TCoin[];

const initialState: TCurrenciesState = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    price: 0,
    dynamics: 0,
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    price: 0,
    dynamics: 0,
  },
];

const currenciesSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    setData: (
      state: TCurrenciesState,
      { payload: { id, price, dynamics } }: PayloadAction<TSetDataPayload>
    ) => {
      state.forEach((currency: TCoin) => {
        if (currency.id === id) {
          currency.price = price;
          currency.dynamics = dynamics;
        }
      });
    },
  },
});

export const currenciesActions = currenciesSlice.actions;
export const currenciesReducer = currenciesSlice.reducer;
