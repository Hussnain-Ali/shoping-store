import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from "../constant/constant";
const initialState = {
  product: [],
  error: null,
  currentPage: 1,
  pageSize: 10,
  totalPages: 1,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        error: null,
        currentPage: action.payload.currentPage,
        pageSize: action.payload.pageSize,
        totalPages: action.payload.totalPages,
      };
    case FETCH_PRODUCT_FAIL:
      return {
        ...state,
        product: [],
        error: action.payload,
        currentPage: 1,
        pageSize: 10,
        totalPages: 1,
      };

    default:
      return state;
  }
};

export default productReducer;
