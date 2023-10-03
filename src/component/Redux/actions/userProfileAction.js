import {
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL,
} from "../constant/constant";
import axios from "axios";

export const fetchUserProfile = () => {
  return async (dispatch) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmY0ZDE4ZGIxODIwOTVmNzIzMmE5YSIsImlhdCI6MTY5NTI5ODk2MywiZXhwIjoxNjk3ODkwOTYzfQ.WE69Nz_e5ppPyzzFO_y-V2p5HLUxbd6-jLLm2Np0cgM";
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
      console.log(
        "🚀 ~ file: userProfileAction.js:22 ~ return ~ response:",
        response.data
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
