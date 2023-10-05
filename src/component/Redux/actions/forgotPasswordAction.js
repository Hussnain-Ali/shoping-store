import { toast } from "react-toastify";
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
    const userDataString = localStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const token = userData && userData.token;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token,
        },
      };

      const response = await axios.post(
        "http://localhost:4000/user/forgetpassword",
        { email },
        config
      );
      const userEmail = response.data;

      dispatch(requestSuccess(userEmail));
      toast.success(response.data);
    } catch (error) {
      dispatch(requestFail(error.response.data.message));
      toast.error(error.response.data.message);
    }
  };
};
