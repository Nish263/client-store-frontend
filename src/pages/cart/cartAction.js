import { setCartItem } from "./cartSlice";

export const cartAction = (products) => async (dispatch) => {
  dispatch(setCartItem(products));
};
