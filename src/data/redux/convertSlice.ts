import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TSymbols } from '../types';

type TSetFromPayload = {
  id: TSymbols;
  value: number;
};

type TSetToPayload = {
  id: TSymbols;
  multiplier: number;
};

type TCurrenciesState = {
  from: {
    id: TSymbols;
    value: number;
  };
  to: {
    id: TSymbols;
    multiplier: number;
  }[];
};

const initialState: TCurrenciesState = {
  from: {
    id: 'usd',
    value: 2000,
  },
  to: [
    {
      id: 'btc',
      multiplier: 0.00124,
    },
  ],
};

const convertSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    setFrom: (
      state: TCurrenciesState,
      { payload }: PayloadAction<TSetFromPayload>
    ) => {
      state.from = { ...payload };
    },
    setTo: (
      state: TCurrenciesState,
      { payload }: PayloadAction<TSetToPayload>
    ) => {
      const matchedId = state.to.findIndex(
        (toItem: TSetToPayload) => toItem.id === payload.id
      );

      if (matchedId !== -1) {
        state.to.push(payload);
      } else {
        state.to[matchedId] = payload;
      }
    },
  },
});

export const convertActions = convertSlice.actions;
export const convertReducer = convertSlice.reducer;
