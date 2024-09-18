import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutData: {},
    amount: 0,
    deliveryFee: 0,
  },
  reducers: {
    addInfo: (state, action) => {
      const data = action.payload;
      state.checkoutData = { ...state.checkoutData, ...data };
    },
    addAmount: (state, action) => {
      state.amount = action.payload;
    },
    addDeliveryFee: (state, action) => {
      state.deliveryFee = action.payload;
    },
    clearCheckoutData: (state, action) => {
      state.checkoutData = {};
    },
  },
});

export const { addInfo, addAmount, addDeliveryFee, clearCheckoutData } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
