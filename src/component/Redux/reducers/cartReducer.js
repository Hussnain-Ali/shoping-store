import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant/constant";

const initialState = {
  cartItems: [],
  itemCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        itemCount: state.itemCount + 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        itemCount: state.itemCount - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
