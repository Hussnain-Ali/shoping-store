import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from "../constant/constant";
const initialState = {
  product: [],
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        error: null,
      };
    case FETCH_PRODUCT_FAIL:
      return {
        ...state,
        product: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
