import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCoin, TCoinIds, TCurrency, THistoryItem } from '../types';

const baseUrl = 'https://api.coingecko.com/api/v3';

type TCoinDataReq = { currency: TCurrency; id: TCoinIds };
type TCoinDataRes = TCoin;

type TCoinHistoryReq = { days: number; currency: TCurrency; id: TCoinIds };
type TCoinHistoryRes = THistoryItem[];

export const cryptoAPI = createApi({
  reducerPath: 'cryptoAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getData: builder.query<TCoinDataRes, TCoinDataReq>({
      query: ({ currency, id }) => ({
        url: 'coins/markets',
        params: {
          vs_currency: currency,
          ids: id,
        },
      }),
      transformResponse: ([coin]) => ({
        id: coin.id,
        symbol: coin.symbol,
        image: coin.image,
        price: coin.current_price,
        dynamics: coin.price_change_percentage_24h,
      }),
    }),
    getHistory: builder.query<TCoinHistoryRes, TCoinHistoryReq>({
      query: ({ currency, id, days }) => ({
        url: `coins/${id}/market_chart`,
        params: {
          vs_currency: currency,
          days,
        },
      }),
      transformResponse: (rawResult: { prices: TCoinHistoryRes }) =>
        rawResult.prices,
    }),
  }),
});

// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14

export const { useGetDataQuery, useGetHistoryQuery } = cryptoAPI;
