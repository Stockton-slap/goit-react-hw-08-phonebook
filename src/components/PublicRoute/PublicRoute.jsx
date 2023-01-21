import { useSelector } from 'react-redux';

import { Navigate } from 'react-router';

import { selectIsLoggedIn } from 'redux/selectors';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  console.log(shouldRedirect);

  return shouldRedirect ? <Navigate to="/" /> : children;
};

export default PublicRoute;
