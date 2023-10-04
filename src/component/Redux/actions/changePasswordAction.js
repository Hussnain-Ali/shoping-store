import { toast } from "react-toastify";
import { CHANGE_PASSWORD } from "../constant/constant";
import axios from "axios";

export const changePassword = ({ password, newPassword }) => {
  return async (dispatch) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmY0ZDE4ZGIxODIwOTVmNzIzMmE5YSIsImlhdCI6MTY5NjQwMDYwNywiZXhwIjoxNjk4OTkyNjA3fQ._-Y4Bpnwvlv2Fm5k0evWrsGYd20FJTJvKtklHB_nW-0";
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token,
        },
      };

      const responsePost = await axios.post(
        "http://localhost:4000/auth/changepassword",
        { password, newpassword: newPassword },
        config
      );

      dispatch({
        type: CHANGE_PASSWORD,
        payload: responsePost.data,
      });

      toast.success("Password changed successfully.");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};
