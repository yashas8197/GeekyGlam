import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishList: [],
  },
  reducers: {
    addWishlist: (state, action) => {
      const itemExist = state.wishList.some(
        (item) => item._id === action.payload._id
      );

      if (!itemExist) {
        state.wishList.push(action.payload);
      }

      return;
    },
    removeWishlist: (state, action) => {
      state.wishList = state.wishList.filter(
        (wishCard) => wishCard._id !== action.payload
      );
    },
  },
});

export const { addWishlist, removeWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
