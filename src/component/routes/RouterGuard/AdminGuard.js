import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const AdminGuard = ({ children }) => {
  return children;
};
AdminGuard.propTypes = {
  children: PropTypes.node,
};
export default AdminGuard;
