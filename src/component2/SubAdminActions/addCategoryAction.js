import axios from "axios";
import { toast } from "react-toastify";
import {
  FETCH_CATEGORY_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
} from "../constants/constant";

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: categories,
});

export const addCategorySuccess = (category) => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: category,
});
export const addCategoryFail = (error) => ({
  type: ADD_CATEGORY_FAIL,
  payload: error,
});

export const deleteCategorySuccess = (categoryId) => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload: categoryId,
});

export const fetchCategories = () => async (dispatch) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmY0ZDE4ZGIxODIwOTVmNzIzMmE5YSIsImlhdCI6MTY5NTI5ODk2MywiZXhwIjoxNjk3ODkwOTYzfQ.WE69Nz_e5ppPyzzFO_y-V2p5HLUxbd6-jLLm2Np0cgM";

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    };
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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmY0ZDE4ZGIxODIwOTVmNzIzMmE5YSIsImlhdCI6MTY5NTI5ODk2MywiZXhwIjoxNjk3ODkwOTYzfQ.WE69Nz_e5ppPyzzFO_y-V2p5HLUxbd6-jLLm2Np0cgM";
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          token: token,
        },
      };
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", image);

      const response = await axios.post(
        "http://localhost:4000/admin/addCategory",
        formData,
        config
      );
      toast.success(response.data);
      dispatch(fetchCategories());
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(addCategoryFail(error.response.data.message));
    }
  };

export const deleteCategory = (categoryId) => async (dispatch) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmY0ZDE4ZGIxODIwOTVmNzIzMmE5YSIsImlhdCI6MTY5NTI5ODk2MywiZXhwIjoxNjk3ODkwOTYzfQ.WE69Nz_e5ppPyzzFO_y-V2p5HLUxbd6-jLLm2Np0cgM";

  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        token: token,
      },
    };
    const response = await axios.delete(
      `http://localhost:4000/admin/removeCateogry/${categoryId}`,
      config
    );
    dispatch(deleteCategorySuccess(categoryId));
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
};
