import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCoinSymbol, TDays } from '../types';

type TChartState = {
  symbol: TCoinSymbol;
  days: TDays;
};

const initialState: TChartState = {
  symbol: 'btc',
  days: 14,
};

type TSetDaysPayload = {
  days: TDays;
};

type TSetCoinPayload = {
  symbol: TCoinSymbol;
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setChartDays: (
      state: TChartState,
      { payload: { days } }: PayloadAction<TSetDaysPayload>
    ) => {
      state.days = days;
    },
    setChartSymbol: (
      state: TChartState,
      { payload: { symbol } }: PayloadAction<TSetCoinPayload>
    ) => {
      state.symbol = symbol;
    },
  },
});

export const chartActions = chartSlice.actions;
export const chartReducer = chartSlice.reducer;
