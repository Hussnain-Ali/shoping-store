import React from "react";
import LockResetIcon from "@mui/icons-material/LockReset";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch } from "react-redux";
import { forgotpassSchema } from "../../Schema/forgotpassSchema";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Box,
  Container,
  InputAdornment,
  Grid,
  Link,
} from "@mui/material";
import { useFormik } from "formik";
import { forgotPassword } from "../../Redux/actions/forgotPasswordAction";

const initialValues = {
  email: "",
};
const ForgetPassword = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: forgotpassSchema,
    onSubmit: (values, action) => {
      dispatch(forgotPassword(values));
      action.resetForm();
    },
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    formik;

  return (
    <Container component={"main"} maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#1976d2" }}>
          <LockResetIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Typography align="center" fontSize={14} mt={2}>
          Enter your email and we will send you a link to reset your password
        </Typography>
        <Box component={"form"} onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon sx={{ color: "#1976d2" }} />
                </InputAdornment>
              ),
            }}
            id="email"
            label="Email"
            name="email"
            autoComplete="on"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
          {errors.email && touched.email ? (
            <Typography color={"#ef6c55"}>{errors.email}</Typography>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item xs align={"center"}>
              <Link href={"/login"}>Back to Login</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgetPassword;
