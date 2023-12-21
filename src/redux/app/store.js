import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../products/slice';
import { filtersReducer } from '../filters/slice';

export const storage = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
  },
});
