import {
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL,
} from "../constant/constant";
import axios from "axios";

export const fetchUserProfile = () => {
  return async (dispatch) => {
    const userDataString = localStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const token = userData && userData.token;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      };
      const response = await axios.get(
        "http://localhost:4000/auth/getProfile",
        config
      );

      dispatch({
        type: FETCH_USER_PROFILE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_PROFILE_FAIL,
        payload: error.message,
      });
    }
  };
};
