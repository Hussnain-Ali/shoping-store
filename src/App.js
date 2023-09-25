import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routess from "./component/routes";
import { Provider } from "react-redux";
import store from "./component/Redux/store";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const selector=useSelector((state)=>state.themeChange);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routess />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
