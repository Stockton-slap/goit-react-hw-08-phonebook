import {
  UserMenuContainer,
  UserMenuEmail,
  UserMenuBtn,
  Avatar,
} from './UserMenu.styled';

import avatar from './avatar.png';

import { logOut } from 'redux/authOperations';

import { useDispatch, useSelector } from 'react-redux';

import { selectAuthEmail } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();

  const email = useSelector(selectAuthEmail);

  return (
    <UserMenuContainer>
      <Avatar src={avatar} alt="avatar" />
      <UserMenuEmail>Welcome, {email}!</UserMenuEmail>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
