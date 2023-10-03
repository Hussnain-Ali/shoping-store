import axios from "axios";
import { ADD_PRODUCT } from "../constants/constant";

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const addProduct = ({ name, description, price, stock, file }) => {
  return async (dispatch) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmY0ZDE4ZGIxODIwOTVmNzIzMmE5YSIsImlhdCI6MTY5NTMwMzY0NywiZXhwIjoxNjk3ODk1NjQ3fQ.fz6mWMTJgmbjjDaU84Xjekg--X1UA0LpzOpo6oN_SVc";

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          token: token,
        },
      };
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("stock", stock);
      formData.append("price", price);
      formData.append("categoryId", "650c4bd6be0387b2f7282322");
      console.log("🚀 ~ file: addCategoryAction.js:48 ~ formData:", formData);

      const response = await axios.post(
        "http://localhost:4000/admin/product",
        formData,
        config
      );
      dispatch(addProductSuccess(response.data));
    } catch (error) {
      return error.message;
    }
  };
};
