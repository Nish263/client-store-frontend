import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddToCartItem: (state, { payload }) => {
      const itemindex = state.cartItem.findIndex(
        (item) => item._id === payload._id
      );
      if (itemindex >= 0) {
        state.cartItem[itemindex].quantity += 1;
      } else {
        const tempProduct = { ...payload, quantity: 1 };
        state.cartItem.push(tempProduct);
      }
    },
  },
  // setRemoveCartItem:(state, {payload})=>{

  // }
});

const { reducer, actions } = cartSlice;
export const { setAddToCartItem } = actions;
export default reducer;
