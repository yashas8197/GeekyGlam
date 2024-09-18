import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      `https://geeky-glam-backend.vercel.app/products/All`
    );

    return response.data;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category) => {
    const response = await axios.get(
      `https://geeky-glam-backend.vercel.app/products/${category}`
    );
    return response.data;
  }
);

export const updateCartStatus = createAsyncThunk(
  "products/updateCartStatus",
  async () => {
    const response = await axios.post(
      `https://geeky-glam-backend.vercel.app/products/updateCartStatus`
    );

    return response.data;
  }
);

export const productListSlice = createSlice({
  name: "productList",
  initialState: {
    filters: {
      sortBy: "",
      categories: [],
      rating: "",
      sizes: {},
      search: "",
      priceRange: 0,
    },
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {
    categoryFilter: (state, action) => {
      const { value, checked } = action.payload;

      if (value === "All") {
        if (checked) {
          state.filters.categories = ["Men", "Women", "Kids"];
        } else {
          state.filters.categories = [];
        }
      } else {
        if (checked) {
          if (!state.filters.categories.includes(value)) {
            state.filters.categories.push(value);
          }
        } else {
          state.filters.categories = state.filters.categories.filter(
            (category) => category !== value
          );
        }
      }
    },
    clearCategoryFilter: (state) => {
      state.filters.categories.length = 0;
    },
    setSort: (state, action) => {
      state.filters.sortBy = action.payload;
    },
    clearSort: (state) => {
      state.filters.sortBy = "";
    },
    toggleWishlistOptimistic: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (productIndex > -1) {
        state.products[productIndex].is_wished =
          !state.products[productIndex].is_wished;
      }
    },
    toggleCartOptimistic: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (productIndex > -1) {
        state.products[productIndex].in_cart =
          !state.products[productIndex].in_cart;
      }
    },
    incrementQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (productIndex > -1) {
        state.products[productIndex].quantity =
          state.products[productIndex].quantity + 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (productIndex > -1) {
        state.products[productIndex].quantity =
          state.products[productIndex].quantity - 1;
      }
    },
    clearCart: (state) => {
      state.products = state.products.map((item) =>
        item.in_cart ? { ...item, in_cart: false } : item
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.products = action.payload.products;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.products = action.payload.products;
    });
    builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
    builder.addCase(updateCartStatus.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(updateCartStatus.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.products = action.payload.updatedProducts;
    });
    builder.addCase(updateCartStatus.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export const {
  categoryFilter,
  clearCategoryFilter,
  setSort,
  clearSort,
  toggleWishlistOptimistic,
  toggleCartOptimistic,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = productListSlice.actions;

export default productListSlice.reducer;
