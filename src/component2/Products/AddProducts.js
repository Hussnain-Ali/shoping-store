import React from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { addProductSchema } from "../Schema/addProductSchema";
import { useDispatch } from "react-redux";
import { addProduct } from "../SubAdminActions/addProductAction";
const initialValues = {
  name: "",
  description: "",
  price: 0,
  stock: 0,
  file: null,
};
const AddProduct = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: addProductSchema,
    onSubmit: (values) => {
      console.log(values);

      dispatch(addProduct(values));
    },
  });
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = formik;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFieldValue("file", selectedFile);
  };
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product Name"
              name="name"
              value={values.name}
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={values.description}
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Stock"
              name="stock"
              type="number"
              value={values.stock}
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={values.price}
              type="number"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              id="fileInput"
              style={{ display: "none" }}
              name="file"
              onBlur={handleBlur}
              onInput={handleFileChange}
            />
            <label htmlFor="fileInput">
              <TextField
                sx={{ marginTop: 2 }}
                variant="outlined"
                fullWidth
                disabled
                value={values.image ? values.image.name : ""}
                placeholder="Image"
              ></TextField>
              <Button
                variant="contained"
                component="span"
                style={{ marginTop: "10px", marginRight: "10px" }}
              >
                Upload Image
              </Button>
            </label>
          </Grid>
        </Grid>
        <Button
          sx={{ marginTop: 2 }}
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          Add Product
        </Button>
      </form>
    </Container>
  );
};
export default AddProduct;
