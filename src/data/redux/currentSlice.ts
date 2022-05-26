import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCoinIds, TTab } from '../types';

type TCurrentPayload = {
  id: TCoinIds;
  value: number;
  dynamics: number;
};

const initialState: TTab[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    value: 0,
    dynamics: 0,
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    image:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    value: 0,
    dynamics: 0,
  },
];

const currentSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    updateData: (
      state: TTab[],
      { payload }: PayloadAction<TCurrentPayload>
    ) => {
      state.forEach((currency: TTab) => {
        if (currency.id === payload.id) {
          currency.value = payload.value;
          currency.dynamics = payload.dynamics;
        }
      });
    },
  },
});

export const currentActions = currentSlice.actions;
export const currentReducer = currentSlice.reducer;
