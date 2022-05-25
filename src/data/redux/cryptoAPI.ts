import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCoin } from '../types';

const baseUrl = 'https://api.coingecko.com/api/v3';

export const cryptoAPI = createApi({
  reducerPath: 'pizzasApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoinData: builder.query<TCoin, { vs_currency: string; ids: string }>({
      query: ({ vs_currency, ids }) => ({
        url: 'coins/markets',
        params: {
          vs_currency,
          ids,
        },
      }),
    }),
  }),
});

export const { useGetCoinDataQuery } = cryptoAPI;
