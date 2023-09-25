import * as Yup from "yup";

export const forgotpassSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
});
