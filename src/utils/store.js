import { configureStore } from "@reduxjs/toolkit";
import { productListSlice } from "./productListSlice";

const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
  },
});

export default store;
