import { configureStore } from '@reduxjs/toolkit';
import { cryptoAPI } from './cryptoAPI';

const index = configureStore({
  reducer: {
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoAPI.middleware),
});

export type TRootState = ReturnType<typeof index.getState>;
//
// export const selectFilters = (state: TRootState) => state.catalog;
// export const selectCartPizzas = (state: TRootState) => state.cart.pizzas;

export default index;
