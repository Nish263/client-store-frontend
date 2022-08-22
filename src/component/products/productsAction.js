import { setProducts } from "./productSlice";
import { getAllProducts } from "../../helper/axiosHelper";

export const fetchProductAction = () => async (dispatch) => {
  const fetchedProducts = await getAllProducts();
  dispatch(setProducts(fetchedProducts));
};
