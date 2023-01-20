import { NavContainer, AuthNav } from './Navigation.styled';
import { StyledLink } from './Navigation.styled';

import UserMenu from 'components/UserMenu';

import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      <StyledLink to="/">Home</StyledLink>

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <AuthNav>
          <li>
            <StyledLink to="/register">Register</StyledLink>
          </li>
          <li>
            <StyledLink to="/login">Log In</StyledLink>
          </li>
        </AuthNav>
      )}
    </NavContainer>
  );
};

export default Navigation;
