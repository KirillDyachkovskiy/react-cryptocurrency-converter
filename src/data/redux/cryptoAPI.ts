import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  TCoinDataReq,
  TCoinDataRes,
  TCoinHistoryReq,
  TCoinHistoryRes,
} from '../types/api';

const baseUrl = 'https://api.coingecko.com/api/v3';

export const cryptoAPI = createApi({
  reducerPath: 'cryptoAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getData: builder.query<TCoinDataRes, TCoinDataReq>({
      query: ({ id }) => ({
        url: 'coins/markets',
        params: {
          vs_currency: 'usd',
          ids: id,
        },
      }),
      transformResponse: ([coin]) => ({
        id: coin.id,
        symbol: coin.symbol,
        price: coin.current_price,
        dynamics: coin.price_change_percentage_24h,
      }),
    }),
    getHistory: builder.query<TCoinHistoryRes, TCoinHistoryReq>({
      query: ({ id, days }) => ({
        url: `coins/${id}/market_chart`,
        params: {
          vs_currency: 'usd',
          days,
        },
      }),
      transformResponse: (rawResult: { prices: TCoinHistoryRes }) =>
        rawResult.prices,
    }),
  }),
});

export const { useGetDataQuery, useGetHistoryQuery } = cryptoAPI;
