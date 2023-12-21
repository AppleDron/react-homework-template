import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6523b574ea560a22a4e8b783.mockapi.io';
export const getProducts = createAsyncThunk(
  'products/fetchAll',
  async (query, thunkAPI) => {
    const { limit, page } = query;
    try {
      const response = await axios.get(`/items?limit=${limit}&page=${page}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTotalData = createAsyncThunk(
  'products/getTotalData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/items');
      const totalItems = response.data.length;

      return {
        totalItems,
        totalPages: Math.ceil(totalItems / thunkAPI.getState().products.limit),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
