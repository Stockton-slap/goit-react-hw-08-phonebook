import { Nav, StyledLink, AuthNav } from './Navigation.styled';

import UserMenu from 'components/UserMenu';

import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <StyledLink to="/" style={{ marginLeft: '40px' }}>
        Home
      </StyledLink>

      {isLoggedIn ? (
        <>
          <StyledLink to="/contacts" style={{ marginLeft: '40px' }}>
            Contacts
          </StyledLink>
          <UserMenu />
        </>
      ) : (
        <AuthNav>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login" style={{ marginLeft: '40px' }}>
            Log In
          </StyledLink>
        </AuthNav>
      )}
    </Nav>
  );
};

export default Navigation;
