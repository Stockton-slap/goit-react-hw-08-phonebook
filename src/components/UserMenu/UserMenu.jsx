import {
  UserMenuContainer,
  UserMenuEmail,
  UserMenuBtn,
} from './UserMenu.styled';

const UserMenu = () => {
  return (
    <UserMenuContainer>
      <UserMenuEmail>mango@mail.com</UserMenuEmail>
      <UserMenuBtn>Logout</UserMenuBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
