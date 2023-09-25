import AdminGuard from "./RouterGuard/AdminGuard";
import { Outlet } from "react-router-dom";
import AdminHeader from "../Layout/Admin/AdminHeader";
import Products from "../pages/productspages/Products";
import ProductView from "../pages/productspages/ProductView";

const AdminRoutes = {
  path: "/",
  element: (
    <AdminGuard>
      <AdminHeader />
      <Outlet />
    </AdminGuard>
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
  ],
};
export default AdminRoutes;
