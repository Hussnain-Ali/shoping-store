import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  CardActions,
} from "@mui/material";
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
      <Grid container spacing={4}>
        <Grid item key={productdetail._id} xs={8} sm={8} md={8}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: "25.25%",
              }}
              image={productdetail.productImage}
            />
            <img
              src={productdetail.productImage}
              style={{ height: "200px", width: "100%" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Name:{productdetail.name}
              </Typography>
              <Typography>Desc:{productdetail.description}</Typography>
              <Typography>Price:${productdetail.price}</Typography>
              <Typography>Stock:{productdetail.stock}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => handleAddToCart(productdetail._id)}
                size="small"
              >
                ADD TO CART
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductView;
