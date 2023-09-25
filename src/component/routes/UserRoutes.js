import React from "react";
import UserGuard from "./RouterGuard/UserGuard";

import { Outlet } from "react-router-dom";
import ChangePassword from "../pages/user/ChangePassword";
import UserProfile from "../pages/user/userProfile";
import HeaderAuth from "../Layout/user/HeaderAuth";
import ProductView from "../pages/productspages/ProductView";
import Products from "../pages/productspages/Products";
const UserRoutes = {
  path: "/",
  element: (
    <UserGuard>
      <HeaderAuth />
      <Outlet />
    </UserGuard>
  ),
  children: [
    {
      path: "/product",
      element: <Products />,
    },
    {
      path: "/product/:id",
      element: <ProductView />,
    },
    {
      path: "/changepassword",
      element: <ChangePassword />,
    },

    {
      path: "/userprofile",
      element: <UserProfile />,
    },
  ],
};

export default UserRoutes;
