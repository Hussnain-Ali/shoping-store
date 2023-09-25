import { useRoutes } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import { useSelector } from "react-redux";
import AuthRoutes from "./AuthRoutes";
import AdminRoutes from "./AdminRoutes";
import SubAdminRoutes from "./SubAdminRoutes";
export default function ThemeRoutes() {
  const routes = [];

  const userData = useSelector((user) => user.auth.userData);
  if (userData?.isAdmin === 1) {
    routes.push(UserRoutes, AuthRoutes);
  } else if (userData?.isAdmin === 3) {
    routes.push(AdminRoutes, AuthRoutes);
  } else if (userData?.isAdmin === 2) {
    routes.push(SubAdminRoutes, AuthRoutes);
  } else {
    routes.push(AuthRoutes);
  }
  return useRoutes(routes);
}
