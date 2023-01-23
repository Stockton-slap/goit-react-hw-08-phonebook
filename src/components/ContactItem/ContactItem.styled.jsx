import styled from 'styled-components';

export const Item = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
`;

export const DeleteBtn = styled.button`
  background-color: #ff7b00;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
`;
