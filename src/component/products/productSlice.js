import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});
export const { actions, reducer } = productSlice;
export const { setProducts } = actions;
export default reducer;
