import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import lastProductReducer from "./slices/lastProductSlice";
import allProductsSlice from "./slices/allProductsSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    lastProduct: lastProductReducer,
    allProducts: allProductsSlice
  },
});
