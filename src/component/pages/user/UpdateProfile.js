import React, { useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateProfileSchema } from "../../Schema/UpdateProfileSchema";
import { updateProfile } from "../../Redux/actions/updateProfileAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};
const UpdateProfile = () => {
  const selector = useSelector((state) => state.updateProfileReducer);
  const { error, profile } = selector;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: updateProfileSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(updateProfile(values));
      if (error === null) {
        resetForm();
        toast.success("Updated Profile Successfully");
        navigate("/userprofile");
      }
    },
  });
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    formik;

  return (
    <form>
      <TextField
        label="Enter First Name"
        variant="outlined"
        fullWidth
        name="firstName"
        value={values.firstName}
        margin="normal"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.firstName && touched.firstName}
      />
      <TextField
        label="Enter Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.lastName && touched.lastName}
      />
      <TextField
        label="Enter Email"
        variant="outlined"
        fullWidth
        margin="normal"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email && touched.email}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Update Profile
      </Button>
    </form>
  );
};

export default UpdateProfile;
