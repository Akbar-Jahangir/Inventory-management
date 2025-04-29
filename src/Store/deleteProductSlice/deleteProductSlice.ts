import { createSlice } from "@reduxjs/toolkit";
import { deleteState } from "./types";

const initialState: deleteState = {
  productId: "",
};

const deleteProductSlice = createSlice({
  name: "delete",
  initialState,
  reducers: {
    deleteProduct(state, action) {
      state.productId = action.payload;
    },
  },
});

export const { deleteProduct } = deleteProductSlice.actions;
export default deleteProductSlice.reducer;
