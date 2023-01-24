import {
  UserMenuContainer,
  UserMenuEmail,
  UserMenuBtn,
  Avatar,
} from './UserMenu.styled';

import avatar from './avatar.png';

import { logOut } from 'redux/authOperations';

import { RotatingLines } from 'react-loader-spinner';

import { useDispatch, useSelector } from 'react-redux';

import { selectAuthEmail } from 'redux/selectors';
import { selectIsAuthLoading } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();

  const email = useSelector(selectAuthEmail);
  const isLoading = useSelector(selectIsAuthLoading);

  return (
    <UserMenuContainer>
      <Avatar src={avatar} alt="avatar" />
      <UserMenuEmail>Welcome, {email}!</UserMenuEmail>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <RotatingLines
              strokeColor="#fff"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}
            />
          </div>
        ) : (
          'Logout'
        )}
      </UserMenuBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
