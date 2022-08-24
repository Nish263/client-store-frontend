import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./component/products/productSlice";
import cartReducer from "./pages/cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
