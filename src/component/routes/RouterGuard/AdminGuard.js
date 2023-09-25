import PropTypes from "prop-types";

const AdminGuard = ({ children }) => {
  return children;
};
AdminGuard.propTypes = {
  children: PropTypes.node,
};
export default AdminGuard;
