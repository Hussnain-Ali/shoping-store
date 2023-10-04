import axios from "axios";
import {
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "../constant/constant";
import { toast } from "react-toastify";

export const updateProfileSuccess = (profile) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: profile,
});
export const updateProfileFail = (error) => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: error,
});

export const updateProfile = (values) => async (dispatch) => {
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
      "http://localhost:4000/auth/updateProfile",
      values,
      config
    );
    toast.success(
      response.data ? response.data : "Updated Profile successfully"
    );
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(updateProfileFail(error.response.data.message));
  }
};
