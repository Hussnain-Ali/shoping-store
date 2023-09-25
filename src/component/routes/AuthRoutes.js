import Header from "../Layout/auth/Header";
import { Outlet } from "react-router-dom";
import Login from "../pages/user/Login";
import AuthGuard from "./RouterGuard/authGuard";
import Products from "../pages/productspages/Products";
import ProductView from "../pages/productspages/ProductView";
import RegisterUser from "../pages/user/RegisterUser";
import ForgetPassword from "../pages/user/ForgetPassword";
const AuthRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <Header />
      <Outlet />
    </AuthGuard>
  ),
  children: [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/product",
      element: <Products />,
    },
    {
      path: "/product/:id",
      element: <ProductView />,
    },
    {
      path: "/register",
      element: <RegisterUser />,
    },
    {
      path: "/forgotpassword",
      element: <ForgetPassword />,
    },
  ],
};

export default AuthRoutes;
