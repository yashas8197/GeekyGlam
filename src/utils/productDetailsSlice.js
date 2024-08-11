import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetails = createAsyncThunk(
  "product/fetchProductDetails",
  async (productId) => {
    const response = await axios.get(
      `https://geeky-glam-backend.vercel.app/product/${productId}`
    );
    ``;
    return response.data;
  }
);

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: {},
    reviews: [
      {
        name: "Ananya Sharma",
        ratings: 4,
        reviews:
          "The Classic Blue Jeans are very comfortable and stylish. Worth the price!",
        avatarPhoto: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "2024-08-01",
      },
      {
        name: "Ravi Kumar",
        ratings: 3,
        reviews:
          "The Casual White Shirt is good for casual wear but could be a bit softer.",
        avatarPhoto: "https://randomuser.me/api/portraits/men/56.jpg",
        date: "2024-07-29",
      },
      {
        name: "Priya Patel",
        ratings: 5,
        reviews: "Absolutely love the Leather Jacket. Great quality and fit!",
        avatarPhoto: "https://randomuser.me/api/portraits/women/68.jpg",
        date: "2024-08-05",
      },
      {
        name: "Amit Singh",
        ratings: 4,
        reviews:
          "The Red Summer Dress is perfect for the season. Very light and comfortable.",
        avatarPhoto: "https://randomuser.me/api/portraits/men/23.jpg",
        date: "2024-07-31",
      },
      {
        name: "Sanya Gupta",
        ratings: 4,
        reviews:
          "The Black Sweatpants are good for lounging and daily wear. A bit pricier than expected.",
        avatarPhoto: "https://randomuser.me/api/portraits/women/45.jpg",
        date: "2024-08-03",
      },
    ],
    status: "idle",
    error: null,
  },
  reducers: {
    postReviews: (state, action) => {
      state.reviews.push(action.payload);
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
