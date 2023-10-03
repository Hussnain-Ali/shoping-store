import * as Yup from "yup";
export const addProductSchema = Yup.object({
  name: Yup.string().min(5).max(25).required("Name is Required"),
  description: Yup.string().required("Describe Your Product"),
  price: Yup.number().required("Enter Price of products"),
  stock: Yup.number().required("Enter Your Stock In Numbers"),
  file: Yup.mixed().required("Choose Images of product"),
});
