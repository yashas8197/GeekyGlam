import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";
import productDetailsSlice from "./productDetailsSlice";
import cartSlice from "./cartSlice";
import searchSlice from "./searchSlice";
import addressSlice from "./addressSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    productList: productListSlice,
    productDetails: productDetailsSlice,
    cart: cartSlice,
    search: searchSlice,
    address: addressSlice,
    orders: orderSlice,
  },
});

export default store;
