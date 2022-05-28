import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TSymbol } from '../types';

type TSetFromPayload = {
  id: TSymbol;
  value: number;
};

type TSetToPayload = {
  index: number;
  id: TSymbol;
  multiplier: number;
};

type TAddToPayload = {
  id: TSymbol;
  multiplier: number;
};

type TCurrenciesState = {
  from: {
    id: TSymbol;
    value: number;
  };
  to: {
    id: TSymbol;
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
      { payload: { index, ...newTo } }: PayloadAction<TSetToPayload>
    ) => {
      const matchedId = state.to.findIndex(
        (toItem: TAddToPayload) => toItem.id === newTo.id
      );

      if (matchedId === -1) {
        state.to[index] = newTo;
      }
    },
    addTo: (
      state: TCurrenciesState,
      { payload }: PayloadAction<TAddToPayload>
    ) => {
      const matchedId = state.to.findIndex(
        (toItem: TAddToPayload) => toItem.id === payload.id
      );

      if (matchedId === -1) {
        state.to.push(payload);
      } else {
        state.to[matchedId] = payload;
      }
    },
  },
});

export const convertActions = convertSlice.actions;
export const convertReducer = convertSlice.reducer;
