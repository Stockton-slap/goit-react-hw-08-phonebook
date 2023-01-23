import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const AuthNav = styled.div`
  position: absolute;
  right: 50px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: #0e4fd1;
  transition: all 300ms ease-in-out;

  &:hover,
  &:focus,
  &.active {
    color: #ff7b00;
  }
`;
