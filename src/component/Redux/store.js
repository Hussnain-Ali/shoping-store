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
import addProductReducer from "../../component2/subAdminReducers/addProductReducer";
import cartReducer from "./reducers/cartReducer";
import userProfile from "./reducers/userProfileReducer";
const rootReducer = combineReducers({
  themeChange: themeChange,
  auth: authReducer,
  passwordchange: changePasswordReducer,
  registration: registrationReducer,
  products: productReducer,
  categoryReducer: categoryReducer,
  cartReducer,
  userProfile: userProfile,
  addProductReducer,
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
