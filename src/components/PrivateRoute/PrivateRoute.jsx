import { Navigate } from 'react-router';

import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/selectors';

const PrivateRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
