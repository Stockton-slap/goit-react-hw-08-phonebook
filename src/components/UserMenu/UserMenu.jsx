import {
  UserMenuContainer,
  UserMenuEmail,
  UserMenuBtn,
} from './UserMenu.styled';

import { logOut } from 'redux/authOperations';

import { useDispatch, useSelector } from 'react-redux';

import { selectAuthEmail } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();

  const email = useSelector(selectAuthEmail);

  return (
    <UserMenuContainer>
      <UserMenuEmail>{email}</UserMenuEmail>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
