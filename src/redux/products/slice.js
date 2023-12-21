import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getTotalData } from './thunk';
import {
  getContactsFulfilledOperation,
  getContactsPendingOperation,
  getContactsRejectedOperation,
  sortPriceDownOperation,
  sortPriceUpOperation,
} from './operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  },
  reducers: {
    sortPriceUp: sortPriceUpOperation,
    sortPriceDown: sortPriceDownOperation,
    changePage: (state, action) => {
      state.page = parseInt(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, getContactsPendingOperation)
      .addCase(getProducts.fulfilled, getContactsFulfilledOperation)
      .addCase(getProducts.rejected, getContactsRejectedOperation)
      .addCase(getTotalData.fulfilled, (state, action) => {
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
      });
  },
});

export const productsReducer = productsSlice.reducer;
export const { sortPriceUp, sortPriceDown, changePage } = productsSlice.actions;
