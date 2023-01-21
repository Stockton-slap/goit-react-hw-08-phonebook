import { NavContainer, Nav, NavItem } from './Navigation.styled';
import { StyledLink } from './Navigation.styled';

import UserMenu from 'components/UserMenu';

import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      <Nav>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        {isLoggedIn && (
          <NavItem>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </NavItem>
        )}
      </Nav>

      {isLoggedIn ? (
        <>
          <UserMenu />
        </>
      ) : (
        <Nav>
          <NavItem>
            <StyledLink to="/register">Register</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/login">Log In</StyledLink>
          </NavItem>
        </Nav>
      )}
    </NavContainer>
  );
};

export default Navigation;
