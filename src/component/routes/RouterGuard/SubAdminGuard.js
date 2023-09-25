import PropTypes from "prop-types";
const SubAdminGuard = ({ children }) => {
  return children;
};
SubAdminGuard.propTypes = {
  children: PropTypes.node,
};
export default SubAdminGuard;
