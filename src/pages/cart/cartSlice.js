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
    setReduceCartItem: (state, { payload }) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].quantity -= 1;
      }
      const newCartItem = state.cartItem.filter(
        (item) => item._id !== payload._id
      );
      if (state.cartItem[itemIndex].quantity <= 0) {
        state.cartItem = newCartItem;
      }
    },

    setRemoveCartItem: (state, { payload }) => {
      const removeCartItem = state.cartItem.filter(
        (item) => item._id !== payload._id
      );
      state.cartItem = removeCartItem;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { setAddToCartItem, setReduceCartItem, setRemoveCartItem } =
  actions;
export default reducer;
