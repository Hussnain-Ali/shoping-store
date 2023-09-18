import * as React from 'react'
import { useFormik } from 'formik';
import { loginSchema } from '../../Schema/LoginSchema';
import { Link } from 'react-router-dom';
import {
    Avatar,
    Button,
    CssBaseline ,
    TextField,
    FormControlLabel , 
    Checkbox,
    Grid ,
    Box ,
    Typography ,
    Container
  } from '@mui/material';
  import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/actions/authActions';

  const initialValues={
    email:"",
    password:''
   }

const Login = () => {
  const dispatch= useDispatch();
  const selector = useSelector((state)=>state.auth);
  const {loading}=selector;
    const formik= useFormik({
        initialValues,
        validationSchema:loginSchema,
        onSubmit:(values, action) => {
        console.log("🚀 ~ file: Login.js:29 ~ Login ~ values:", values)
          dispatch(login(values))
          action.resetForm()
        
        }
       })
       const {
        values,
        handleBlur,
        handleSubmit,
        handleChange,
        errors,
        touched
       }=formik

    
  return (
    <> 
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component={"form"} onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete='on'
              autoFocus
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
                <Typography color={"#ef6c55"}>{errors.email}</Typography>
            ):null}
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
            ):null}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
          {loading ? "loading" : "Sign In"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </>
     
  )
}

export default Login
