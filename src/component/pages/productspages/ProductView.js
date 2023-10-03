import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../Redux/actions/fetchProductAction";
import { addToCart } from "../../Redux/actions/CartActions";
import { useNavigate, useParams } from "react-router-dom";

const ProductView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector((state) => state.products.product);
  const checkLogin = useSelector((user) => user.auth.userData);

  const productdetail = products.find((p) => p._id === id);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (!productdetail) {
    return <p>Loading...</p>;
  }
  const handleAddToCart = () => {
    if (checkLogin) {
      dispatch(addToCart(productdetail));
    } else {
      navigate("/login");
    }
  };
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        {productdetail.name}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Description:
      </Typography>
      <Typography variant="body1" paragraph>
        {productdetail.description}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Price: ${productdetail.price}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Stock: {productdetail.stock}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleAddToCart(productdetail._id)}
      >
        Add to Cart
      </Button>
    </Container>
  );
};

export default ProductView;
