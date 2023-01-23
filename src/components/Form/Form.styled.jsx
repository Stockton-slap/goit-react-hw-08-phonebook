import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 30px;

  margin: 0 auto;
`;

export const ContactTitle = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
`;

export const ContactLabel = styled.label`
  margin-bottom: 5px;
  font-weight: 700;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const ContactValue = styled.input`
  height: 20px;
  padding-left: 5px;

  transition: all 300ms ease-in-out;

  &:focus {
    border-color: #ff7b00;
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    outline: none;
    border-radius: 5px;
  }
`;

export const AddBtn = styled.button`
  margin-top: 40px;
  height: 30px;
  background-color: #ff7b00;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
`;
