import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCoinIds, TDays } from '../types';

type TSetDaysPayload = {
  days: TDays;
};

type TSetCoinPayload = {
  id: TCoinIds;
};

type TChartState = {
  id: TCoinIds;
  days: TDays;
};
const initialState: TChartState = {
  id: 'bitcoin',
  days: 14,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setDays: (
      state: TChartState,
      { payload: { days } }: PayloadAction<TSetDaysPayload>
    ) => {
      state.days = days;
    },
    setCoin: (
      state: TChartState,
      { payload: { id } }: PayloadAction<TSetCoinPayload>
    ) => {
      state.id = id;
    },
  },
});

export const chartActions = chartSlice.actions;
export const chartReducer = chartSlice.reducer;
