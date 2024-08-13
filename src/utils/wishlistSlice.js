import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const response = await axios.get(
      `https://geeky-glam-backend.vercel.app/products`
    );

    return response.data;
  }
);

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "success";
        state.wishList = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addWishlist, removeWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
