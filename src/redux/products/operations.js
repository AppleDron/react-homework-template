export const getContactsPendingOperation = (state, action) => {
  state.isLoading = true;
};

export const getContactsFulfilledOperation = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

export const getContactsRejectedOperation = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const sortPriceUpOperation = (state, action) => {
  state.items.sort((a, b) => a.price - b.price);
};

export const sortPriceDownOperation = (state, action) => {
  state.items.sort((a, b) => b.price - a.price);
};
