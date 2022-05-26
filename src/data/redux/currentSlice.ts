import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCoin, TCoinIds } from '../types';

type TSetDataPayload = {
  id: TCoinIds;
  price: number;
  dynamics: number;
};

type TCurrentState = TCoin[];

const initialState: TCurrentState = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    price: 0,
    dynamics: 0,
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    image:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    price: 0,
    dynamics: 0,
  },
];

const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    setData: (
      state: TCurrentState,
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

export const currentActions = currentSlice.actions;
export const currentReducer = currentSlice.reducer;
