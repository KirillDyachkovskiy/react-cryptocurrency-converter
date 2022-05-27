import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWallet } from '../types';

type TSetValuePayload = {
  id: TWallet;
  value: number;
};

type TWalletState = {
  id: TWallet;
  value: number;
}[];

const initialState: TWalletState = [
  {
    id: 'usd',
    value: 10000,
  },
  {
    id: 'bitcoin',
    value: 10000,
  },
  {
    id: 'ethereum',
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
