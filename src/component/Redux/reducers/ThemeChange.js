import { DARKTHEME } from "../constant/constant";

const initialState = {
  palette: {
    type: "light",
  },
};

const themeChange = (state = initialState, action) => {
  switch (action.type) {
    case DARKTHEME:
      return {
        ...state,
        palette: {
          type: state.palette.type === "light" ? "dark" : "light",
        },
      };
    default:
      return state;
  }
};

export default themeChange;
