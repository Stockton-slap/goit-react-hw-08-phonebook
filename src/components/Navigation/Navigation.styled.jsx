import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.ul`
  padding: 0;
  margin: 0;
  padding-right: 80px;
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin-left: 40px;
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
