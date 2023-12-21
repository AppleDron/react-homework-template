import { createSlice } from '@reduxjs/toolkit';
import { sortProductsWithPriceOperation } from './operations';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    price: [],
  },
  reducers: {
    setPriceRangeFilter: sortProductsWithPriceOperation,

    setSearchFilter(state, action) {
      return { ...state, search: action.payload };
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const {
  setSearchFilter,
  sortPriceDown,
  sortPriceUp,
  setPriceRangeFilter,
} = filtersSlice.actions;
