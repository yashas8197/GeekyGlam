import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchProductDetails = createAsyncThunk(
  "product/fetchProductDetails",
  async (productId) => {
    const response = await axios.get(`${BASE_URL}/product/${productId}`);
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
        `${BASE_URL}/product/${productId}`,
        dataToUpdate
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const reviewPost = createAsyncThunk(
  "product/postReviews",
  async ({ review, productId }) => {
    const response = await axios.post(
      `${BASE_URL}/product/reviews/${productId}`,
      review
    );

    console.log(response);
    return response.data;
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
    reviewProduct: (state, action) => {
      console.log(action.payload);
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

    builder.addCase(updateDataApi.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(updateDataApi.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.product = action.payload.updatedProduct;
    });
    builder.addCase(updateDataApi.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });

    builder.addCase(reviewPost.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(reviewPost.fulfilled, (state, action) => {
      state.status = "fulfilled";
      const updatedData = action.payload.product;
      state.product = updatedData;
    });
    builder.addCase(reviewPost.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export const { postReviews, reviewProduct } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
