import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import themeChange from "./reducers/ThemeChange";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import changePasswordReducer from "./reducers/changePasswordReducer";
import registrationReducer from "./reducers/registerReducer";
import productReducer from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import categoryReducer from "../../component2/subAdminReducers/addCategoryReducer";
import cartReducer from "./reducers/cartReducer";
const rootReducer = combineReducers({
  themeChange: themeChange,
  auth: authReducer,
  passwordchange: changePasswordReducer,
  registration: registrationReducer,
  products: productReducer,
  categoryReducer: categoryReducer,
  cartReducer,
});

const userInfoFromStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;
const initialState = {
  auth: {
    userData: userInfoFromStorage,
  },
};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
