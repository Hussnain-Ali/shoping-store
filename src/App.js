import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routess from "./component/routes"
import { Provider } from 'react-redux';
import store from './component/Redux/store';
// import RegisterUser from './component/pages/user/RegisterUser';
// import {ThemeProvider} from "@mui/material"
// import { useSelector } from 'react-redux';

function App() {
  // const selector=useSelector((state)=>state.themeChange);
  return (
  //  <ThemeProvider>
  <Provider store={store}> 
    <BrowserRouter>
   <Routess/>
   </BrowserRouter>
   </Provider>
 
  // <RegisterUser/>
  //  </ThemeProvider>
  );
}

export default App;
