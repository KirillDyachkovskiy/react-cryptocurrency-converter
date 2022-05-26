import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TCoin, TCoinIds } from "../types";
// import { useGetDataQuery } from './cryptoAPI';

type TCurrentPayload = {
  id: TCoinIds;
  price: number;
  dynamics: number;
};
//
// export const updateAllData = createAsyncThunk(
//   'current/updateData',
//   async () => {
//     const { data: bitcoin, isSuccess: isBitcoinSuccess } = useGetDataQuery({
//       currency: 'usd',
//       id: 'bitcoin',
//     });
//     const { data: ethereum, isSuccess: isEthereumSuccess } = useGetDataQuery({
//       currency: 'usd',
//       id: 'ethereum',
//     });
//
//     if (isBitcoinSuccess && isEthereumSuccess) {
//       currentActions.updateData(bitcoin);
//       currentActions.updateData(ethereum);
//     }
//   }
// );

const initialState: TCoin[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    price: 0,
    dynamics: 0,
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    image:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    price: 0,
    dynamics: 0,
  },
];

const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    updateData: (
      state: TCoin[],
      { payload: { id, price, dynamics } }: PayloadAction<TCurrentPayload>
    ) => {
      state.forEach((currency: TCoin) => {
        if (currency.id === id) {
          currency.price = price;
          currency.dynamics = dynamics;
        }
      });
    },
  },
});

export const currentActions = currentSlice.actions;
export const currentReducer = currentSlice.reducer;
