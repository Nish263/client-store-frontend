import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./component/products/productSlice";
import cartReducer from "./pages/cart/cartSlice";
import categoryReducer from "./pages/categories/CategoriesSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    category: categoryReducer,
  },
});

export default store;
