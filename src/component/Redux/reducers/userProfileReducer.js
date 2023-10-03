import {
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL,
} from "../constant/constant";

const initialState = {
  profile: null,
  error: null,
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        error: null,
      };
    case FETCH_USER_PROFILE_FAIL:
      return {
        ...state,
        profile: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userProfile;
