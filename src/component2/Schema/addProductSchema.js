import * as Yup from "yup";
export const addProductSchema = Yup.object({
  name: Yup.string().min(5).max(25).required("Name is Required"),
  description: Yup.string().required("Describe Your Product"),
  categoryId: Yup.string().required("Select category of Product"),
  price: Yup.number().required("Enter Price of products"),
  stock: Yup.number().required("Enter Your total Stock"),
  file: Yup.mixed().required("Choose Images of product"),
});
