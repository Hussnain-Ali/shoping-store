import {
  ADD_TO_CART,
  DECREMENT_ITEMS,
  INCREMENT_ITEMS,
  REMOVE_FROM_CART,
} from "../constant/constant";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const incrementItem = (productId) => ({
  type: INCREMENT_ITEMS,
  payload: productId,
});
export const decrementItem = (productId) => ({
  type: DECREMENT_ITEMS,
  payload: productId,
});
