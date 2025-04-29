import { configureStore } from "@reduxjs/toolkit";
import addProductReducer from "./productSlice/productSlice";
import searchProductReducer from "./productSearchSlice/productSearchSlice";
import addVendorReducer from "./vendorSlice/vendorSlice";
import deleteProductReducer from "./deleteProductSlice/deleteProductSlice";
import signUpReducer from "./AuthSlice/signUpSlice/signUpSlice"

export const store = configureStore({
  reducer: {
    productsList: addProductReducer,
    search: searchProductReducer,
    vendorsList: addVendorReducer,
    delete: deleteProductReducer,
    signUp:signUpReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
