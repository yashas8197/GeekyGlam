import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
  name: "address",
  initialState: {
    addresses: [
      {
        id: 1,
        fullName: "John Doe",
        street: "123 Main St",
        city: "Springfield",
        state: "IL",
        postalCode: "62701",
        country: "USA",
        email: "johndoe@gmail.com",
        phoneNumber: "9857646372",
      },
    ],
  },
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    deleteAddress(state, action) {
      state.addresses = state.addresses.filter(
        (address) => address.id !== action.payload
      );
    },
    updateAddress: (state, action) => {
      const address = state.addresses.find(
        (address) => address.id === action.payload.id
      );
      if (address) {
        Object.assign(address, action.payload);
      }
    },
  },
});

export const { addAddress, deleteAddress, updateAddress } =
  addressSlice.actions;

export default addressSlice.reducer;
