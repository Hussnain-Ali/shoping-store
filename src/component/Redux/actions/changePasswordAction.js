import { CHANGE_PASSWORD } from "../constant/constant";
import axios from "axios";

export const changePassword = (currentPassword) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:4000/auth/changepassword", {
        currentPassword,
      });

      const response = await axios.get(
        "http://localhost:4000/auth/changepassword"
      );
      console.log(
        "🚀 ~ file: changePasswordAction.js:10 ~ returnasync ~ response:",
        response
      );

      dispatch({
        type: CHANGE_PASSWORD,
        payload: response.data,
      });
    } catch (error) {
      console.log("Password Change Failed:", error);
    }
  };
};
