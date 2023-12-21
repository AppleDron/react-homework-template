import { createSelector } from '@reduxjs/toolkit';
import {
  getPriceFilter,
  getSearchSelector,
} from '../../redux/filters/selectors';

export const getProductsSelector = state => state.products.items;
export const getLimitSelector = state => state.products.limit;
export const getPageSelector = state => state.products.page;

export const isLoadingSelector = state => state.products.isLoading;
export const errorSelector = state => state.products.error;

export const selectFilteredProducts = createSelector(
  [getProductsSelector, getPriceFilter, getSearchSelector],
  (products, price, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredByName = products.filter(product =>
      product.name.toLowerCase().includes(normalizedFilter)
    );

    const { minPrice, maxPrice } = price;
    const filteredByPrice = filteredByName.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );

    return filteredByPrice;
  }
);

export const getTotalPagesSelector = state => {
  return state.products.totalPages;
};
