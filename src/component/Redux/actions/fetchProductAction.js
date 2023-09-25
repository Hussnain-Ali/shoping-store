import axios from "axios";
import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from "../constant/constant";

export const fetchProductSuccess = (product) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProductFail = (error) => ({
  type: FETCH_PRODUCT_FAIL,
  payload: error,
});

export const fetchProduct = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4000/product")
      .then((response) => {
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductFail(error));
      });
  };
};
