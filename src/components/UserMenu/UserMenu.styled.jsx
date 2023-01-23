import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  position: absolute;
  right: 50px;
`;

export const UserMenuEmail = styled.p`
  margin: 0;
  margin-left: 10px;
  font-weight: 700;
`;

export const UserMenuBtn = styled.button`
  margin-left: 20px;

  height: 30px;
  width: 100px;
  background-color: #ff7b00;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
`;

export const Avatar = styled.img`
  width: 40px;
  border-radius: 20%;
  background-color: #0abeff;
`;
