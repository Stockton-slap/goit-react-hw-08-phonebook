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
  height: 30px;
  background-color: #ff7b00;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
`;
