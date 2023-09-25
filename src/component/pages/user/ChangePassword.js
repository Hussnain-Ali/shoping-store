import * as React from "react";
import { useFormik } from "formik";
import { ChangePassSchema } from "../../Schema/ChangePassSchema";
import { changePassword } from "../../Redux/actions/changePasswordAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};
const ChangePassword = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.passwordchange);
  const { loading } = selector;

  const formik = useFormik({
    initialValues,
    validationSchema: ChangePassSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ file: Login.js:29 ~ Login ~ values:", values);
      dispatch(changePassword(values));
      action.resetForm();
    },
  });
  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    formik;

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Change Password
          </Typography>
          <Box component={"form"} onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              label="Current Password"
              type="password"
              id="currentPassword"
              autoComplete="current-password"
              value={values.currentPassword}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.currentPassword && touched.currentPassword ? (
              <Typography color={"#ef6c55"}>
                {errors.currentPassword}
              </Typography>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="New Password"
              type="password"
              id="newPassword"
              value={values.newPassword}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.newPassword && touched.newPassword ? (
              <Typography color={"#ef6c55"}>{errors.newPassword}</Typography>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={values.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Typography color={"#ef6c55"}>
                {errors.confirmPassword}
              </Typography>
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? "Loading" : "Change Password"}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ChangePassword;
