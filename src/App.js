import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routess from "./component/routes";
import { Provider, useSelector } from "react-redux";
import store from "./component/Redux/store";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <ToastContainer />
      <BrowserRouter>
        <Routess />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
