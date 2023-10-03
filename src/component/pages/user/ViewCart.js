import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from "../../Redux/actions/CartActions";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ViewCart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrement = (productId) => {
    dispatch(incrementItem(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementItem(productId));
  };

  const calculateTotal = (cartItems) => {
    let total = 0;

    for (const item of cartItems) {
      console.log(item.quantity);
      total += item.price;
    }

    return total;
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDecrement(item.id)}>
                    -
                  </IconButton>
                  {item.quantity}
                  <IconButton onClick={() => handleIncrement(item._id)}>
                    +
                  </IconButton>
                </TableCell>
                <TableCell>
                  ${(item.price * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleRemove(item._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <Typography variant="h6">Total:</Typography>
        <Typography variant="h6">
          ${calculateTotal(cartItems).toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary">
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            Checkout
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default ViewCart;
