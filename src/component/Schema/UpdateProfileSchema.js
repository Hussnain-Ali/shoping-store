import * as Yup from "yup";
export const updateProfileSchema = Yup.object({
  firstName: Yup.string()
    .min(6)
    .max(55)
    .required("Please Enter Your First Name"),
  lastName: Yup.string().min(2).max(15).required("Please Enter Your Last Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
});
