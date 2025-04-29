import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "./types";

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
