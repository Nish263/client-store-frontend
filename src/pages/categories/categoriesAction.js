import { setCategories } from "./CategoriesSlice";
import { getAllCategories } from "../../helper/axiosHelper";

export const fetchCategoryAction = () => async (dispatch) => {
  const fetechedCategory = await getAllCategories();
  dispatch(setCategories(fetechedCategory));
};
