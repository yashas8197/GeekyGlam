import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";
import productDetailsSlice from "./productDetailsSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    productList: productListSlice,
    productDetails: productDetailsSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    search: searchSlice,
  },
});

export default store;
