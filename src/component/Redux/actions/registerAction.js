import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../constant/constant";
import axios from "axios";

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
});

export const registerFail = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const register = ({ fname, lname, email, password }) => {
  return async (dispatch) => {
    dispatch(registerRequest());

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:4000/user/register",
        { firstName: fname, lastName: lname, email, password },
        config
      );
      console.log(response.message, "jjjkkj");

      const userData = response.data;
      dispatch(registerSuccess(userData));
    } catch (error) {
      dispatch(registerFail(error.response.data.message));
      console.log(error.response.data.message);
    }
  };
};
