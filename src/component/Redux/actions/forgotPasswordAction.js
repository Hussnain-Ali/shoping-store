import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
} from "../constant/constant";

import axios from "axios";

export const requestSnd = () => ({
  type: FORGOT_PASSWORD_REQUEST,
});

export const requestSuccess = (userEmail) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: userEmail,
});
export const requestFail = (error) => ({
  type: FORGOT_PASSWORD_FAIL,
  payload: error,
});

export const forgotPassword = ({ email }) => {
  return async (dispatch) => {
    dispatch(requestSnd());
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:4000/user/forgetpassword",
        { email },
        config
      );
      const userEmail = response.data;
      console.log(
        "🚀 ~ file: forgotPasswordAction.js:41 ~ returnasync ~ userEmail:",
        userEmail
      );
      dispatch(requestSuccess(userEmail));
    } catch (error) {
      dispatch(requestFail(error.message));
    }
  };
};
