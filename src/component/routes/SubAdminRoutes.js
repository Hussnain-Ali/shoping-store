import React from "react";
import SubAdminGuard from "./RouterGuard/SubAdminGuard";
import { Outlet } from "react-router-dom";
import SubAdminHeader from "../Layout/SubAdmin/SubAdminHeader";
import Dashboard from "../../component2/SubAdminDashboard/DashBoard";
import Products from "../pages/productspages/Products";
import ProductView from "../pages/productspages/ProductView";
import UserProfile from "../pages/user/userProfile";
import CategoryPage from "../../component2/Category/AddCategory";
import AddProduct from "../../component2/Products/AddProducts";
import ChangePassword from "../pages/user/ChangePassword";
import UpdateProfile from "../pages/user/UpdateProfile";

const SubAdminRoutes = {
  path: "/",
  element: (
    <SubAdminGuard>
      <SubAdminHeader />
      <Outlet />
    </SubAdminGuard>
  ),
  children: [
    {
      path: "/subAdminDashboard",
      element: <Dashboard />,
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
      path: "/userprofile",
      element: <UserProfile />,
    },
    {
      path: "/updateprofile",
      element: <UpdateProfile />,
    },
    {
      path: "/changepassword",
      element: <ChangePassword />,
    },
    {
      path: "/addcategory",
      element: <CategoryPage />,
    },
    {
      path: "/addproduct",
      element: <AddProduct />,
    },
  ],
};
export default SubAdminRoutes;
