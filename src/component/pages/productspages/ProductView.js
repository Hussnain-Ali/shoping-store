import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../Redux/actions/fetchProductAction";
import { addToCart } from "../../Redux/actions/CartActions";
const product = {
  images: [
    "https://via.placeholder.com/300/FF5733",
    "https://via.placeholder.com/300/33FF57",
    "https://via.placeholder.com/300/5733FF",
    "https://via.placeholder.com/300/FFFF33",
  ],
};

const ProductView = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.product);
  const productdetail = products.find((p) => p.id === products._id);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (!productdetail) {
    return <p>Loading...</p>;
  }
  const handleAddToCart = (productId) => {
    const productdetail = products.find((p) => p.id === productId);
    console.log(dispatch(addToCart(productdetail)));
  };
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        {productdetail.name}
      </Typography>
      <Carousel showThumbs={false}>
        {product.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Product Image ${index}`} />
          </div>
        ))}
      </Carousel>
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
        onClick={() => handleAddToCart(product.id)}
      >
        Add to Cart
      </Button>
    </Container>
  );
};

export default ProductView;
