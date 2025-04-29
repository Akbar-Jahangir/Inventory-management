import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./types";

const initialState: userState = {
  users: [],
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    createUser(state, actions) {
      state.users.push(actions.payload);
    },
  },
});

export const { createUser } = signUpSlice.actions;
export default signUpSlice.reducer;
