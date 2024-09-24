import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchProducts = createAsyncThunk("search/Products", async (q) => {
  const response = await axios.get(`${BASE_URL}/productsearch?q=${q}`);
  return response.data;
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    query: {},
    status: "idle",
    error: null,
  },
  reducers: {
    cacheResults: (state, action) => {
      state = { ...action.payload, ...state.query };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.results = action.payload;
    });
    builder.addCase(searchProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
