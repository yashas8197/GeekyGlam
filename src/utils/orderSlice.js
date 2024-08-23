import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await axios.get(
    "https://geeky-glam-backend.vercel.app/orders"
  );

  return response.data;
});

export const addOrders = createAsyncThunk("orders/addOrders", async (order) => {
  const response = await axios.post(
    "https://geeky-glam-backend.vercel.app/orders",
    order
  );

  console.log(response);
  return response.data;
});

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.orders = action.payload.orders;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export default orderSlice.reducer;
