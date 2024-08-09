import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";
import productDetailsSlice from "./productDetailsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    productList: productListSlice,
    productDetails: productDetailsSlice,
    cart: cartSlice,
  },
});

export default store;
