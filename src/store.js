import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./component/products/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
