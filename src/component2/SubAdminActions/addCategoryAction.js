import axios from "axios";
import {
  FETCH_CATEGORY_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
} from "../constants/constant";

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: categories,
});

export const addCategorySuccess = (category) => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: category,
});

export const deleteCategorySuccess = (categoryId) => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload: categoryId,
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmY0ZDE4ZGIxODIwOTVmNzIzMmE5YSIsImlhdCI6MTY5NTI5ODk2MywiZXhwIjoxNjk3ODkwOTYzfQ.WE69Nz_e5ppPyzzFO_y-V2p5HLUxbd6-jLLm2Np0cgM";
const config = {
  headers: {
    "Content-Type": "application/json",
    token: token,
  },
};
export const fetchCategories = () => async (dispatch) => {
  try {
    await axios
      .get("http://localhost:4000/admin/getCategories", config)
      .then((response) => {
        dispatch(fetchCategoriesSuccess(response.data));
      });
  } catch (error) {
    return error.response.data.message;
  }
};

export const addCategory =
  ({ name, image }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/admin/addCategory",
        { name, file: image },
        config
      );
      dispatch(addCategorySuccess(response.data));
    } catch (error) {
      return error.message;
    }
  };

export const deleteCategory = (categoryId) => async (dispatch) => {
  try {
    await axios.delete(
      `http://localhost:4000/admin/getCategories/${categoryId}`
    );
    dispatch(deleteCategorySuccess(categoryId));
  } catch (error) {
    return error.message;
  }
};
