import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWallet } from '../types';

type TSetValuePayload = {
  id: TWallet;
  value: number;
};

type TWalletState = {
  usd: number;
  bitcoin: number;
  ethereum: number;
};

const initialState: TWalletState = {
  usd: 10000,
  bitcoin: 10000,
  ethereum: 10000,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setValue: (
      state: TWalletState,
      { payload: { id, value } }: PayloadAction<TSetValuePayload>
    ) => {
      state[id] = value;
    },
  },
});

export const walletActions = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
