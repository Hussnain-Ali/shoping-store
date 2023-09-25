import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOGOUT,
} from "../constant/constant";
import axios from "axios";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});
export const loginFail = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = ({ values, navigate }) => {
  console.log(values);
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:4000/user/login",
        values,
        config
      );
      const userData = response.data;
      dispatch(loginSuccess({ userData }));
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
    } catch (error) {
      dispatch(loginFail(error.response.data.message));
    }
  };
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userData");
  dispatch({
    type: USER_LOGOUT,
  });
};
