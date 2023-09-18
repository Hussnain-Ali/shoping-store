import {applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import themeChange from "./reducers/ThemeChange";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import changePasswordReducer from "./reducers/changePasswordReducer";
const rootReducer=combineReducers({
    themeChange:themeChange,
    auth:authReducer,
    passwordchange:changePasswordReducer
})

const store= createStore(rootReducer, applyMiddleware(thunk))
console.log("🚀 ~ file: store.js:11 ~ store:", store)

export default store;
