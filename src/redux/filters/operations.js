export const sortProductsWithPriceOperation = (state, action) => {
  return { ...state, price: action.payload };
};
