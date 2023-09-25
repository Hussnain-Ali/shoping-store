import React, { useEffect } from "react";
import { useFormik } from "formik";
import { registrationSchema } from "../../Schema/RegistrationSchem";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { register } from "../../Redux/actions/registerAction";
import { toast } from "react-toastify";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterUser = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.registration);
  const { loading, error } = selector;
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ file: Login.js:29 ~ Login ~ values:", values);
      dispatch(register(values));
      action.resetForm();
    },
  });

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
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
            Sign Up
          </Typography>
          <Box component={"form"} onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fname"
              label="First Name"
              name="fname"
              autoFocus
              value={values.fname}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.fname && touched.fname ? (
              <Typography color={"#ef6c55"}>{errors.fname}</Typography>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              id="lname"
              label="Last Name"
              name="lname"
              value={values.lname}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.lname && touched.lname ? (
              <Typography color={"#ef6c55"}>{errors.lname}</Typography>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="on"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <Typography color={"#ef6c55"}>{errors.email}</Typography>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <Typography color={"#ef6c55"}>{errors.password}</Typography>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? "loading" : "Register"}
            </Button>
            <Grid container>
              <Grid item sx={{ mb: 2 }}>
                <Link href="#" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegisterUser;
