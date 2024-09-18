import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";
import productDetailsSlice from "./productDetailsSlice";
import searchSlice from "./searchSlice";
import addressSlice from "./addressSlice";
import orderSlice from "./orderSlice";
import checkoutSlice from "./checkoutSlice";

const store = configureStore({
  reducer: {
    productList: productListSlice,
    productDetails: productDetailsSlice,
    search: searchSlice,
    address: addressSlice,
    orders: orderSlice,
    checkout: checkoutSlice,
  },
});

export default store;
