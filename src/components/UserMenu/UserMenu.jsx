import {
  UserMenuContainer,
  UserMenuEmail,
  UserMenuBtn,
} from './UserMenu.styled';

import { logOut } from 'redux/authOperations';

import { useDispatch } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <UserMenuContainer>
      <UserMenuEmail>mango@mail.com</UserMenuEmail>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
