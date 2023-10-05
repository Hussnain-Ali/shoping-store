import axios from "axios";
import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from "../constant/constant";

export const fetchProductSuccess = (product, totalPages) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product,
  totalPages,
});

export const fetchProductFail = (error) => ({
  type: FETCH_PRODUCT_FAIL,
  payload: error,
});

export const fetchProduct = (page, pageSize) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/product?page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductFail(error));
      });
  };
};
