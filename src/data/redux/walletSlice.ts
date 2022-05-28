import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSymbol } from '../types';

type TSetValuePayload = {
  id: TSymbol;
  value: number;
};

type TWalletState = {
  id: TSymbol;
  value: number;
}[];

const initialState: TWalletState = [
  {
    id: 'usd',
    value: 10000,
  },
  {
    id: 'btc',
    value: 10000,
  },
  {
    id: 'eth',
    value: 10000,
  },
];

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setValue: (
      state: TWalletState,
      { payload: { id, value } }: PayloadAction<TSetValuePayload>
    ) => {
      state.forEach((item) => {
        if (item.id === id) {
          item.value = value;
        }
      });
    },
  },
});

export const walletActions = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
