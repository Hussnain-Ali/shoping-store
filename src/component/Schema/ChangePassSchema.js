import * as Yup from 'yup';
export const ChangePassSchema=Yup.object({
currentPassword:Yup.string()
.required("Current Password is Required"),
newPassword:Yup.string()
.min(6)
.required("Enter New Password"),
confirmPassword:Yup.string()
.oneOf([Yup.ref('newPassword'),null],'Password Must Match')
.required('Confirm Password is Required')
})
