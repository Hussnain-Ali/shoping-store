import { DARKTHEME } from "../constant/constant";

export const themeChange = () => async (dispatch) => {
  dispatch({
    type: DARKTHEME,
  });
};
