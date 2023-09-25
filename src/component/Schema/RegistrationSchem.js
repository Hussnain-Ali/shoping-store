import * as Yup from "yup";
export const registrationSchema = Yup.object({
  fname: Yup.string().min(6).max(55).required("Please Enter Your First Name"),
  lname: Yup.string().min(2).max(15).required("Please Enter Your Last Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm Password Is Required"),
});
