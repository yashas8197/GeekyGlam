import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      `https://geeky-glam-backend.vercel.app/products/All`
    );

    return response.data;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProducts",
  async (category) => {
    const response = await axios.get(
      `https://geeky-glam-backend.vercel.app/products/${category}`
    );
    return response.data;
  }
);

export const productListSlice = createSlice({
  name: "productList",
  initialState: {
    filters: {
      sortBy: "",
      categories: [],
      rating: "",
      sizes: {},
      search: "",
      priceRange: 0,
    },
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {
    categoryFilter: (state, action) => {
      const { value, checked } = action.payload;

      if (value === "All") {
        if (checked) {
          state.filters.categories = ["Men", "Women", "Kids"];
        } else {
          state.filters.categories = [];
        }
      } else {
        if (checked) {
          if (!state.filters.categories.includes(value)) {
            state.filters.categories.push(value);
          }
        } else {
          state.filters.categories = state.filters.categories.filter(
            (category) => category !== value
          );
        }
      }
    },
    clearCategoryFilter: (state) => {
      state.filters.categories.length = 0;
    },
    setSort: (state, action) => {
      state.filters.sortBy = action.payload;
    },
    clearSort: (state) => {
      state.filters.sortBy = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.products = action.payload.products;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export const { categoryFilter, clearCategoryFilter, setSort, clearSort } =
  productListSlice.actions;

export default productListSlice.reducer;
