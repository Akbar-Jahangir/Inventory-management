import { createSlice } from "@reduxjs/toolkit";
import { VendorsState } from "./types";





const initialState: VendorsState = {
  vendors: [],
};

const vendorSlice = createSlice({
  name: "vendorsList",
  initialState,
  reducers: {
    addVendor(state, action) {
      state.vendors.push(action.payload);
    },
  },
});

export const { addVendor } = vendorSlice.actions;
export default vendorSlice.reducer;
