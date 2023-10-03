///// "UserGuard" is typically a concept or piece of code used to protect certain routes or resources in a web application, ensuring that only authorized users can access them.

import PropTypes from "prop-types";

const UserGuard = ({ children }) => {
  return children;
};

UserGuard.propTypes = {
  children: PropTypes.node,
};

export default UserGuard;
