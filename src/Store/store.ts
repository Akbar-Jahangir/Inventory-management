import { configureStore } from "@reduxjs/toolkit";
import addProductReducer from "./ProductSlice/productSlice";
import searchProductReducer from "./ProductSearchSlice/productSearchSlice";
import addVendorReducer from "./VendorSlice/vendorSlice";
import deleteProductReducer from "./DeleteProductSlice/deleteProductSlice";
import signUpReducer from "./AuthSlice/SignUpSlice/signUpSlice";

export const store = configureStore({
  reducer: {
    productsList: addProductReducer,
    search: searchProductReducer,
    vendorsList: addVendorReducer,
    delete: deleteProductReducer,
    signUp: signUpReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
