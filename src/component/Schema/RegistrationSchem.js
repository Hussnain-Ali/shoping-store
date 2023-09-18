import * as Yup from 'yup';
export const registrationSchema=Yup.object({
    name:Yup.string()
    .min(6)
    .max(25)
    .required('Please Enter Your Name'),
    email:Yup.string()
    .email()
    .required("Please Enter Your Email"),
    password:Yup.string()
    .min(6)
    .required("Please Enter Your Password"),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'),null],'Password must match')
    .required('Confirm Password Is Required')
})

