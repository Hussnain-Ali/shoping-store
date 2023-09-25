import * as Yup from "yup";
export const addCategorySchema = Yup.object({
  name: Yup.string().required("Name Is Required"),
  image: Yup.mixed().required("Image is Required"),
});
