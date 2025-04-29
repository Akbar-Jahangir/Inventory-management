import { createSlice } from "@reduxjs/toolkit";
import { searchState } from "./types";

const initialState: searchState = {
  term: "",
};

const productSearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchItem(state, action) {
      state.term = action.payload;
    },
  },
});

export const { searchItem } = productSearchSlice.actions;
export default productSearchSlice.reducer;
