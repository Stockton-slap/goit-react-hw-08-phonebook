import { NavContainer, AuthNav } from './Navigation.styled';
import UserMenu from 'components/UserMenu';

import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <AuthNav>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </AuthNav>
      )}
    </NavContainer>
  );
};

export default Navigation;
