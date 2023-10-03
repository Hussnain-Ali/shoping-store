import {
  ADD_TO_CART,
  DECREMENT_ITEMS,
  INCREMENT_ITEMS,
  REMOVE_FROM_CART,
} from "../constant/constant";

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
      console.log(action.payload);
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
        itemCount: state.itemCount - 1,
      };
    case INCREMENT_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREMENT_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
