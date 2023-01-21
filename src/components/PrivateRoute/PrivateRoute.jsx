import { Navigate } from 'react-router';

import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
