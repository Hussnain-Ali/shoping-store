import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  Box,
} from "@mui/material";

import { useEffect, useState } from "react";
import { fetchProduct } from "../../Redux/actions/fetchProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.product);
  console.log(products.length);
  const currentPage = useSelector((state) => state.products.currentPage);
  const pageSize = useSelector((state) => state.products.pageSize);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / pageSize);

  useEffect(() => {
    dispatch(fetchProduct(page, pageSize));
  }, [dispatch, page, pageSize]);

  const handleViewClick = (id) => {
    navigate(`/product/${id}`);
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
                  pt: "25.25%",
                }}
                image={card.productImage}
              />
              <img
                src={card.productImage}
                style={{ height: "200px", width: "100%" }}
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
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginTop: 5 }}
      >
        <Button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>Page {currentPage}</span>
        <Button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default Products;
