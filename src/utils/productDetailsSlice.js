import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetails = createAsyncThunk(
  "product/fetchProductDetails",
  async (productId) => {
    const response = await axios.get(
      `https://geeky-glam-backend.vercel.app/product/${productId}`
    );
    return response.data;
  }
);

export const updateDataApi = createAsyncThunk(
  "wishlist/updateDataApi",
  async ({ productId, field, value, quantity }) => {
    const dataToUpdate = { [field]: value };

    if (quantity !== undefined) {
      dataToUpdate.quantity = quantity;
    }

    try {
      const response = await axios.post(
        `https://geeky-glam-backend.vercel.app/product/${productId}`,
        dataToUpdate
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: {},
    status: "idle",
    error: null,
  },
  reducers: {
    postReviews: (state, action) => {
      state.product.reviewsList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.product = action.payload.product;
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export const { postReviews } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
