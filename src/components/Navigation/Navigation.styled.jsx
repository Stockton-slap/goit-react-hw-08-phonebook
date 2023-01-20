import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthNav = styled.ul`
  padding: 0;
  margin: 0;
  padding-right: 80px;
  list-style: none;
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;

  transition: all 300ms ease-in-out;

  &:first-child {
    margin-left: 40px;
  }

  &.active {
    color: #ff7b00;
    text-decoration: underline;
  }

  &:hover {
    font-weight: 600;
  }

  &.active:hover {
    font-weight: 600;
  }
`;
