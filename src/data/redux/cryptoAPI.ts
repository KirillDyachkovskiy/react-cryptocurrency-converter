import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCoin, TCoinIds, TCurrency } from '../types';

const baseUrl = 'https://api.coingecko.com/api/v3';

export const cryptoAPI = createApi({
  reducerPath: 'pizzasApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoinData: builder.query<TCoin[], { currency: TCurrency; id: TCoinIds }>({
      query: ({ currency, id }) => ({
        url: 'coins/markets',
        params: {
          vs_currency: currency,
          ids: id,
        },
      }),
    }),
  }),
});

export const { useGetCoinDataQuery } = cryptoAPI;
