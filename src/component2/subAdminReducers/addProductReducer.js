import { ADD_PRODUCT } from "../constants/constant";

const initialState = {
  products: [],
};

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default addProductReducer;
