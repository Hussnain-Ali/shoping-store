import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";
import { useEffect } from "react";
import { fetchProduct } from "../../Redux/actions/fetchProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.product);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleViewClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {products.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="div"
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                image={card.productImage}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Name:{card.name}
                </Typography>
                <Typography>Desc:{card.description}</Typography>
                <Typography>Price:${card.price}</Typography>
                <Typography>Stock:{card.stock}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleViewClick(card._id)} size="small">
                  View
                </Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
