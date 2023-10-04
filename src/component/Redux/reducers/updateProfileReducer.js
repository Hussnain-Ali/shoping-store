import {
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "../constant/constant";

const initialState = {
  profile: null,
  error: null,
};

const updateProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        error: null,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        profile: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default updateProfileReducer;
