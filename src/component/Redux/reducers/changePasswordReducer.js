import { CHANGE_PASSWORD } from "../constant/constant";

const changePasswordReducer = (state = { changepassword: null }, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return {
        ...state,
        changepassword: action.payload,
      };
    default:
      return state;
  }
};

export default changePasswordReducer;
