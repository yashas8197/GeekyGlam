import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);
      if (existingItem) {
        existingItem.quantity = +quantity;
      } else {
        state.items.push({ ...product, quantity: +quantity });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);
      if (existingItem) {
        existingItem.quantity = +quantity;
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
