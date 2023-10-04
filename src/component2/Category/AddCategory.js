import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { addCategorySchema } from "../Schema/addCategorySchema";
import {
  Paper,
  Typography,
  Button,
  TextField,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import {
  fetchCategories,
  addCategory,
  deleteCategory,
} from "../SubAdminActions/addCategoryAction";
import { toast } from "react-toastify";

const initialValues = {
  name: "",
  image: null,
};
const CategoryPage = () => {
  const categoriess = useSelector((state) => state.categoryReducer);
  const { categories, error, loading } = categoriess;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: addCategorySchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addCategory(values));
      if (error !== null) {
        resetForm();
      }
    },
  });

  const {
    values,
    handleBlur,
    handleSubmit,
    handleChange,
    errors,
    touched,
    setFieldValue,
  } = formik;
  if (values == null) {
    toast.error("categories.error");
  }
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFieldValue("image", selectedFile);
  };
  return (
    <form>
      <Typography variant="h5" gutterBottom>
        Category Management
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Add New Category</Typography>
            <TextField
              label="Category Name"
              variant="outlined"
              fullWidth
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.name && touched.name ? (
                  <Typography color={"#ef6c55"}>{errors.name}</Typography>
                ) : null
              }
            />
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }}
              id="image-input"
              onInput={handleFileChange}
              onBlur={handleBlur}
              name="image" // Make sure name matches the field name
            />
            {errors.image && touched.image ? (
              <Typography color={"#ef6c55"}>{errors.image}</Typography>
            ) : null}
            <label htmlFor="image-input">
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

            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}
              onClick={handleSubmit}
            >
              Add Category
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Categories List</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Category Name</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell>{category.name}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleDeleteCategory(category.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
};

export default CategoryPage;
