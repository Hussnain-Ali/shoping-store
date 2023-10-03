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
